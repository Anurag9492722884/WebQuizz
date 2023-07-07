import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "react-toastify/dist/ReactToastify.css";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { toast, ToastContainer } from "react-toastify";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:7018/api/auth/signin",
        {
          username: username,
          password: password,
        }
      );

      const { accessToken, roles } = response.data;
      localStorage.setItem("user", JSON.stringify(response.data));

      if (roles.includes("ROLE_ADMIN")) {
        console.log(response);
        // Redirect to admin page
        toast("Logged In Successfully!");
        navigate("/dashboard");
      } else {
        navigate("/dashboard");
        toast("Logged In Successfully!");

        // Redirect to dashboard
      }
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
        toast.error(error.response.data.message);
        console.log(error.response.data.message);
      }
    }
  };

  const handleLoginAdmin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:7018/api/auth/signin",
        {
          username,
          password,
        }
      );

      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      const gg = JSON.parse(localStorage.getItem("user"));
      console.log(gg);
      const name = gg.username;
      const roles_array = gg.roles;

      if (roles_array.indexOf("ROLE_ADMIN") > -1) {
        toast("Logged In Successfully!");

        navigate("/Admin-page");
      }
      if (roles_array.indexOf("ROLE_USER") > -1) {
        toast("Logged In Successfully!");     

        navigate("/dashboard");
      }
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Welcome!
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            Sign in to continue.
          </Typography>
          <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleLogin}
            >
              Log in
            </Button>
            <ToastContainer />
            <Button
              fullWidth
              variant="text"
              sx={{ mt: 2, mb: 2 }}
              onClick={handleLoginAdmin}
            >
              Admin? Click here to login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link
                  component="button"
                  variant="body2"
                  onClick={() => navigate("/sign-up")}
                >
                  Don't have an account? Sign up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
