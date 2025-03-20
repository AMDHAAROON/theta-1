import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import Navbar from "../../Component/Navbar";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import TitleWithDescription from "../../Component/TitleWithDescription ";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import Footer from "../../Component/Footer";

const Optica = () => {
  const contestData = [
    // {
    //   title: "Short Film Contest Registration",
    //   lastDate: "20 - 04 - 2023",
    //   submissionDates: "20th April - 25 April",
    // },
    // {
    //   title: "Mobile Photography Contest",
    //   lastDate: "20 - 04 - 2023",
    //   submissionDates: "20th April - 25 April",
    // },
    // {
    //   title: "AD Film Contest",
    //   lastDate: "20 - 04 - 2023",
    //   submissionDates: "20th April - 25 April",
    // },
    // {
    //   title: "MashUp Contest",
    //   lastDate: "20 - 04 - 2023",
    //   submissionDates: "20th April - 25 April",
    // },
    // {
    //   title: "Digital Camera Photography Contest",
    //   lastDate: "20 - 04 - 2023",
    //   submissionDates: "20th April - 25 April",
    // },
    // {
    //   title: "On spot Photography Contest",
    //   lastDate: "20 - 04 - 2023",
    //   submissionDates: "20th April - 25 April",
    // },
  ];
  const faqs = [
    {
        que: "How can I register for the workshop?",
        ans: "You can register through the official website or the registration link provided in the event details.",
      },
      {
        que: "Is there any registration fee?",
        ans: " The registration fee, if applicable, will be mentioned in the event details.",
      },
      {
        que: "Will I receive a certificate?",
        ans: "Yes, participants who complete the workshop will receive a certificate of participation.",
      },
      {
        que: "Who can join the workshop?",
        ans: "The workshop welcomes all students, regardless of their background, department, or experience level.",
      },
  ];
  const [currentFaq, setCurrentFaq] = React.useState(faqs);
  const [expand, setExpand] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpand = () => {
    if (expand) {
      setCurrentFaq(faqs.slice(0, 7));
      setExpand(false);
    } else {
      setCurrentFaq(faqs);
      setExpand(true);
    }
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Box
        sx={{
          position: "relative",
          backgroundImage: "url(Assets/Clusterlogo/Optica.png)",
          backgroundSize: "50%",
          backgroundPosition: "center",
          color: "white",
          padding: { xs: "30px 1rem", md: "50px 10rem" },
          height: { xs: "50vh", md: "55vh" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#0B1121",
            opacity: 0.85,
            zIndex: -1,
          },
        }}
      >
        <Navbar color="#fff" />
        <Box>
          <Typography
            sx={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: ["20px", "22px", "36px"],
              my: 1,
              textAlign: "center",
            }}
          >
            Optica
          </Typography>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  color: "#9A9EA1",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                Home
              </Typography>
            </Link>
            <ArrowRightAltIcon
              sx={{
                color: "#9A9EA1",
                fontWeight: "bold",
                fontSize: "36px",
              }}
            />
            <Typography
              sx={{
                color: "#9A9EA1",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              Optica
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ py: 5, px: 2, bgcolor: "#000212" ,textAlign:'center'}}>
        <TitleWithDescription
          title="About Optica"
          description="Optica Cluster, powered by the Physics Department, accelerates your curiosity with momentum! Dive into the dynamics of motion, unravel the mysteries of quantum states, and reflect on the wonders of the universe—because here, every action sparks an equal and opposite reaction!"
        />
        <Typography
          gutterBottom
          data-aos="fade-up"
          data-aos-duration="1000"
          sx={{
            fontSize: { xs: "30px", sm: "35px", md: "32px" },
            fontWeight: "semibold",
            marginTop: "-2rem",
            color: "#847D77",
            textAlign: "center",
            letterSpacing: 2,
            paddingTop:"1.5rem"
          }}
        >
          "Bringing clarity to every vision."
        </Typography>
      </Box>
      {/* <Box sx={{ py: 5, bgcolor: "#000212" }}>
        <TitleWithDescription title="Contest Registration" />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 3,
            padding: 4,
          }}
        >
          {contestData.map((contest, index) => (
            <Box
              key={index}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={`${100 * index}`}
              sx={{
                width: { xs: "100%", sm: "90%", md: "30%" },
                height: "auto",
                bgcolor: "#E6F3FB",
                gap: 2,
                p: 3,
                border: "3px solid #EF3D4E",
                borderRadius: "10px",
                textAlign: "center",
                transition: "transform 0.3s ease, box-shadow 0.5s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 0px 103px -25px rgba(125,125,125,1)",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  color: "#333",
                  mb: 1,
                }}
              >
                {contest.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.1rem",
                  color: "#333",
                  fontWeight: 600,
                  letterSpacing: 0.8,
                  mb: 2.5,
                }}
              >
                Last Date for Registration:
                <br /> {contest.lastDate}
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.1rem",
                  color: "#9C79A1",
                  letterSpacing: 0.8,
                  mb: 3,
                }}
              >
                Submission dates: {contest.submissionDates}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  background: `linear-gradient(91.83deg, rgb(255, 81, 47) 0%, rgb(221, 36, 118) 100%)`,
                  textTransform: "none",
                  borderRadius: "50px",
                  fontSize: "1rem",
                  px: [4],
                  color: "#fff",
                  border: "2px solid transparent",
                  "&:hover": {
                    background: "transparent",
                    border: "2px solid #EF3D4E",
                    color: "#EF3D4E",
                  },
                }}
              >
                Register Now
              </Button>
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={{ bgcolor: "#000212" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            py: 5,
          }}
        >
          <Divider
            variant="middle"
            component="li"
            sx={{
              borderColor: "#282828",
              width: "92%",
              position: "relative",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scaleY(1.1)",
              },
              "&::before": {
                content: '""',
                position: "absolute",
                width: "30%",
                height: "2px",
                backgroundColor: "#FFD700",
                top: "50%",
                left: "0",
                transform: "translateY(-50%)",
                transition: "width 0.3s ease",
              },
              "&::after": {
                content: '""',
                position: "absolute",
                width: "30%",
                height: "2px",
                backgroundColor: "#FFD700",
                top: "50%",
                right: "0",
                transform: "translateY(-50%)",
                transition: "width 0.3s ease",
              },
              "&:hover::before, &:hover::after": {
                width: "40%",
              },
            }}
          />
        </Box>
      </Box> */}
      <Box sx={{ p: [5, 10], bgcolor: "#000212" }}>
        <TitleWithDescription title="About our Workshops" />
        <Box
          sx={{
            width: "100%",
            "& .MuiPaper-root.MuiAccordion-root": {
              boxShadow: "0px 12px 21px rgb(0 0 0 / 5%)",
              borderTop: "none",
              borderRadius: ".4rem",
              p: 1,
              bgcolor: "#111C3A",
              color: "#fff",
              mb: 2,
            },
            "& .MuiPaper-root.MuiAccordion-root.Mui-expanded": {
              boxShadow: "0px 12px 21px rgb(0 0 0 / 5%)",
              borderTop: "none",
              borderRadius: ".4rem",
              background: `linear-gradient(91.83deg,rgb(221, 36, 118) 0%, rgb(255, 81, 47)  100%)`,
              color: "#fff",
              p: 1,
            },
            "& .MuiPaper-root.MuiAccordion-root:before": {
              height: 0,
            },
            "& .MuiButtonBase-root.MuiAccordionSummary-root.Mui-expanded": {
              color: "#fff",
            },
            "& .MuiCollapse-root": {
              color: "#fff",
            },
            "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
              background: "transparent",
              color: "#fff",
            },
            "& .MuiAccordionSummary-expandIconWrapper": {
              background: "transparent",
              color: "#fff",
            },
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          {currentFaq.map((i, k) => (
            <Accordion
              key={k}
              expanded={expanded === k}
              onChange={handleChange(k)}
            >
              <AccordionSummary
                expandIcon={expanded === k ? <CancelIcon /> : <AddCircleIcon />}
                aria-controls={`panel1a-content-${k}`}
                id={`panel1a-header-${k}`}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: "1rem", xl: "1.2rem" },
                    fontWeight: 400,
                  }}
                >
                  {i.que}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: "1rem", xl: "1.2rem" },
                    fontWeight: 400,
                    lineHeight: 1.6,
                    letterSpacing: 0.9,
                  }}
                >
                  {i.ans}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
      <Box sx={{ bgcolor: "#000212" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            py: 5,
          }}
        >
          <Divider
            variant="middle"
            component="li"
            sx={{
              borderColor: "#282828",
              width: "92%",
              position: "relative",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scaleY(1.1)",
              },
              "&::before": {
                content: '""',
                position: "absolute",
                width: "30%",
                height: "2px",
                backgroundColor: "#FFD700",
                top: "50%",
                left: "0",
                transform: "translateY(-50%)",
                transition: "width 0.3s ease",
              },
              "&::after": {
                content: '""',
                position: "absolute",
                width: "30%",
                height: "2px",
                backgroundColor: "#FFD700",
                top: "50%",
                right: "0",
                transform: "translateY(-50%)",
                transition: "width 0.3s ease",
              },
              "&:hover::before, &:hover::after": {
                width: "40%",
              },
            }}
          />
        </Box>
      </Box>
      <Box>
        <Footer />
      </Box>
    </>
  );
};

export default Optica;
