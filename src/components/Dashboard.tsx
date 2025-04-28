import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import AppBar from "./AppBar";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { deleteData } from "./redux-toolkit/dataSlice";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useAppDispatch } from "./redux-toolkit/hooks";
import { Data } from "./types/data.types";
import { LOCAL_STORAGE_KEYS } from "./helpers/enums";

export default function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 170 },
    { field: "firstName", headerName: "First name", width: 210 },
    { field: "lastName", headerName: "Last name", width: 210 },
    {
      field: "age",
      headerName: "Age",
      width: 180,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 220,
      valueGetter: (_value, row) =>
        `${row.firstName || ""} ${row.lastName || ""}`,
    },

    {
      field: "actions",
      headerName: "Actions",
      width: 220,
      renderCell: (params) => {
        return (
          <>
            <IconButton
              onClick={() => {
                navigate(`/editData/${params.row.id}`);
              }}
            >
              <EditIcon />
            </IconButton>

            <IconButton
              onClick={() => {
                dispatch(deleteData(params.row.id));
              }}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                navigate(`/viewData/${params.row.id}`);
              }}
            >
              <VisibilityIcon />
            </IconButton>
          </>
        );
      },
    },
  ];

  const rows: Data[] = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_KEYS.USERS) as string
  );

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <AppBar />

      <Button
        variant="contained"
        sx={{
          marginTop: "30px",
          alignSelf: "flex-end",
          marginRight: "150px",
        }}
        onClick={() => navigate("/addData")}
      >
        Add Form Data
      </Button>

      <Paper
        sx={{
          height: 400,
          width: "80%",
          marginTop: "30px",
          borderRadius: 3,
          boxShadow: 5,
        }}
      >
        <DataGrid
          columns={columns}
          rows={rows}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          disableRowSelectionOnClick
          disableColumnSelector
          slots={{
            noRowsOverlay: () => (
              <Box
                height="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
              >
                <Typography>No users found</Typography>
              </Box>
            ),
          }}
        />
      </Paper>
    </Box>
  );
}
