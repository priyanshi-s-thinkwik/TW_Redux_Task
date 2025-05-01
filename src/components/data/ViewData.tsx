import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Card, Typography } from "@mui/material";
import { Data } from "../types/data.types";
import { LOCAL_STORAGE_KEYS } from "../helpers/enums";
const ViewData = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const data: Data[] = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_KEYS.USERS) as string
  );
  const user: Data | undefined = data.find((data) => data.id === Number(id));
  
  

  return (
    <Card
      sx={{
        padding: 4,
        width: 400,
        boxShadow: 3,
        justifySelf: "center",
        marginTop: "150px",
      }}
    >
      <Box>
        <Typography sx={{ fontFamily: "Times New Roman", fontSize: 30 }}>
          <strong>UserData</strong>
        </Typography>
        <Box>
          {user ? (
            <>
              <Typography>ID : {user.id} </Typography>
              <Typography>FirstName : {user.firstName} </Typography>
              <Typography>LastName : {user.lastName} </Typography>
              <Typography>Age : {user.age} </Typography>
              <Button
                sx={{ marginLeft: "340px" }}
                onClick={() => navigate("/dashboard")}
              >
                Cancel
              </Button>
            </>
          ) : (
            <>User not found.</>
          )}
        </Box>
      </Box>
    </Card>
  );
};

export default ViewData;
