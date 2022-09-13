import { Box, Modal, styled, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";



const SytledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
  marginLeft:"170px"
});

export default function ImagePreview({ nasaPicture, title, description }) {
  const [open, setOpen] = useState(false);
  return (
    <div>

      <li>
        <Image width={250} height={125} src={nasaPicture} alt="" onClick={() => setOpen(true)} />
        <div className="nasaId"> {title}</div>

      </li>

      <SytledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={900}
          height={500}
          bgcolor={"#333"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="#fff" textAlign="center">
            EXPLORE THE PLANET

          </Typography>
          <Typography variant="h6" color="#fff" textAlign="center">
            {title}

          </Typography>
          <UserBox>

            <Image src={nasaPicture} width={500} height={300} alt=""/><br />

          </UserBox>
          <Box marginLeft={10} marginRight ={10}>
          <Typography variant="h9" color="white" textAlign="center" >

            {description}
          </Typography>
          </Box>
        </Box>

      </SytledModal>

    </div>
  );
}
