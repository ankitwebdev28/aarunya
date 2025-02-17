import PropTypes from "prop-types";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex">
      <div className="flex-1">
        <h1>Hello From the admin layout</h1>
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminLayout;
