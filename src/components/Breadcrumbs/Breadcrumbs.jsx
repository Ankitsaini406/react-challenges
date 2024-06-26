import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
    const { pathname } = useLocation();
    const pathnames = pathname.split("/").filter((x) => x);
    let breadcrumbPath = "";

    return (
        <div>
          {pathnames.length > 0 && <Link to="/">Home</Link>}
            {pathnames.map((name, index) => {
                breadcrumbPath += `/${name}`;
                const isLast = index === pathnames.length - 1;
                return isLast ? (
                    <span key={breadcrumbPath}>/ {name}</span>
                ) : (
                    <span>
                        /
                        <Link key={breadcrumbPath} to={breadcrumbPath}>
                            {name}
                        </Link>
                    </span>
                );
            })}
        </div>
    );
};

export default Breadcrumbs;
