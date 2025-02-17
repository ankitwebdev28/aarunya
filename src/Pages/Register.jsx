import React, { useState, useEffect } from "react";
import stateCityData from "../../state_city.json";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3003";

function Signup() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    pincode: "",
    college_name: "",
    state: "",
    city: "",
    password: "",
  });

  const [otp, setOtp] = useState(""); // Stores OTP input
  const [showOtpModal, setShowOtpModal] = useState(false); // Controls OTP modal visibility
  const [userId, setUserId] = useState(null); // Stores user ID for OTP verification
  const [loading, setLoading] = useState(false);

  // ✅ Extract unique states
  const states = [...new Set(Object.keys(stateCityData))];

  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (formData.state) {
      // ✅ Extract unique cities for the selected state
      setCities([...new Set(stateCityData[formData.state] || [])]);
    } else {
      setCities([]);
    }
  }, [formData.state]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateForm = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    const phoneRegex = /^\d{10}$/;

    if (
      !formData.first_name ||
      !formData.email ||
      !formData.phone ||
      !formData.password
    ) {
      alert("❌ All required fields must be filled!");
      return false;
    }
    if (!emailRegex.test(formData.email)) {
      alert("❌ Invalid email format");
      return false;
    }
    if (!phoneRegex.test(formData.phone)) {
      alert("❌ Phone number should be 10 digits");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Signup failed");
      }

      const result = await response.json();
      alert("✅ Signup successful! OTP has been sent to your email/phone.");

      if (!result.user_id) {
        throw new Error("❌ Signup response is missing user_id");
      }

      setUserId(result.user_id); // ✅ Ensure correct key is used
      setShowOtpModal(true); // Show OTP modal
    } catch (error) {
      console.error("❌ Signup failed:", error);
      alert(error.message || "❌ Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Handle OTP verification
  const verifyOtp = async () => {
    if (!otp) {
      alert("❌ Please enter the OTP");
      return;
    }

    if (!userId) {
      alert("❌ User ID is missing. Please sign up again.");
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/users/verify_email`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: userId, otp }), // ✅ Ensure correct key is used
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "OTP verification failed");
      }

      alert("✅ OTP verified successfully! Redirecting to login...");
      window.location.href = "/login"; // Redirect on success
    } catch (error) {
      console.error("❌ OTP verification failed:", error);
      alert(error.message || "❌ OTP verification failed. Please try again.");
    }
  };

  return (
    <div className="py-4 px-4 md:py-12 md:px-56 min-h-screen flex items-center justify-center bg-cover bg-center bg-[#fff]">
      <div className="flex w-full">
        {/* Left Section - Image (Hidden on Mobile) */}
        <div
          className="hidden md:flex md:w-1/2 items-center justify-center bg-cover bg-center rounded-l-3xl"
          style={{ backgroundImage: "url('/images/signin_image.png')" }}
        >
          <div className="w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-70 p-6 rounded-l-3xl">
            <h1 className="text-4xl text-center font-bold text-white">
              Welcome!
            </h1>
            <p className="mt-3 text-lg text-white">
              Sign up to start your journey.
            </p>
          </div>
        </div>

        {/* Right Section - Signup Form */}
        <div className="flex w-full md:w-1/2 items-center justify-center bg-white p-10 shadow-lg rounded-l-3xl md:rounded-l-none rounded-r-3xl">
          <div className="w-full">
            <img
              alt="aarunya"
              src="/images/aarunya.png"
              className="mx-auto block max-w-[150px] h-auto"
            />
            <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-black">
              Create Your Account
            </h2>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {[
                { label: "First Name", name: "first_name", type: "text" },
                { label: "Last Name", name: "last_name", type: "text" },
                { label: "Email", name: "email", type: "email" },
                { label: "Phone", name: "phone", type: "tel" },
                { label: "Address", name: "address", type: "text" },
                { label: "Pincode", name: "pincode", type: "text" },
                { label: "College Name", name: "college_name", type: "text" },
                { label: "Password", name: "password", type: "password" },
              ].map(({ label, name, type }) => (
                <div key={name}>
                  <label className="block text-sm font-semibold">{label}</label>
                  <input
                    name={name}
                    type={type}
                    value={formData[name]}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              ))}

              {/* State Dropdown */}
              <div>
                <label className="block text-sm font-semibold">State</label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">Select State</option>
                  {states.map((state, index) => (
                    <option key={index} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>

              {/* City Dropdown */}
              <div>
                <label className="block text-sm font-semibold">City</label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  disabled={!formData.state}
                >
                  <option value="">Select City</option>
                  {cities.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md disabled:bg-gray-400"
                disabled={loading}
              >
                {loading ? "Signing Up..." : "Sign Up"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* OTP Verification Modal */}
      {showOtpModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-center mb-4">Enter OTP</h2>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
            <button
              onClick={verifyOtp}
              className="w-full bg-green-600 text-white py-2 rounded-md mt-4"
            >
              Verify OTP
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Signup;
