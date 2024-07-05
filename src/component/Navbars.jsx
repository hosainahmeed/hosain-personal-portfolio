import { useState } from "react";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

function Navbars() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (sectionId) => () => {
    setAnchorEl(null);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="mt-8 flex justify-between items-center md:flex md:items-start md:justify-between md:mt-12">
      <div>
        <h1 className="text-[4vw] font-bold md:text-[2vw] text-[#393737]">
          Hosain Ali
        </h1>
      </div>
      <div className="hidden md:block md:text-[#393737]">
        <p className="font-mono">SiteMap:</p>
        <div className="md:flex md:gap-4">
          <h6
            onClick={handleClose("about")}
            className="cursor-pointer font-mono transition-all hover:scale-125"
          >
            About_Me
          </h6>
          <h6
            onClick={handleClose("projects")}
            className="cursor-pointer font-mono transition-all hover:scale-125"
          >
            Projects
          </h6>
          <h6
            onClick={handleClose("contact")}
            className="cursor-pointer font-mono transition-all hover:scale-125"
          >
            Contact
          </h6>
        </div>
      </div>
      <div className="hidden md:block md:text-[#393737]">
        <p className="font-mono">Status:</p>
        <h6 className="font-mono text-green-700 animate-pulse">Available</h6>
      </div>
      <div className="md:hidden">
        <MenuOpenRoundedIcon
          sx={{
            backgroundColor: "#fff",
            fontSize: "35px",
            borderRadius: "50%",
            paddingX: "10px",
            paddingY: "10px",
            color: "#111",
            cursor: "pointer",
          }}
          onClick={handleClick}
        />
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={handleClose("about")}>About</MenuItem>
          <MenuItem onClick={handleClose("projects")}>Projects</MenuItem>
          <MenuItem onClick={handleClose("contact")}>Contact</MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default Navbars;
