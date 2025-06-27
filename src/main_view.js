import { Typography, Box, useTheme } from "@mui/material";
import ScreenshotSection from "./components/screenshots_section";
import { tokens } from "./theme";
import MembersSection from "./components/members_section";
import AppIntroduction from "./components/app_introduction";
import aux from "./screenshots/aux.jpg";
import course_feedback from "./screenshots/course_feedback.jpg";
import explore from "./screenshots/explore.jpg";
import login from "./screenshots/login.jpg";
import modules from "./screenshots/modules.jpg";
import profile from "./screenshots/profile.jpg";
import stream from "./screenshots/stream.jpg";
import todo from "./screenshots/todo.jpg";

const aux_package = {
  img_path: aux,
  description: "Auxiliar: Añadí un profesor auxiliar para ayudar en la clase.",
};

const course_feedback_package = {
  img_path: course_feedback,
  description: "Feedback: Dile a tu profesor que te pareció la clase.",
};

const explore_package = {
  img_path: explore,
  description: "Explorar: Busca clases nuevas a las cual unirte.",
};

const login_package = {
  img_path: login,
  description:
    "Login: Login seguro local o con autenticación de Google. Datos biométricos opcionales.",
};

const modules_package = {
  img_path: modules,
  description: "Módulos: Crea módulos con tareas y examenes.",
};

const profile_package = {
  img_path: profile,
  description: "Perfil: Personaliza tu perfil.",
};

const stream_package = {
  img_path: stream,
  description:
    "Clases: Cada clase tiene su propio apartado personalizado con sus tareas, profesores y demás.",
};

const todo_package = {
  img_path: todo,
  description:
    "To-Do: Estate al día con las cosas que debas entregar o corregir.",
};

export default function MainView() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      mt="60px"
      mb="40px"
    >
      <Box textAlign={"center"}>
        <Typography
          variant="h2"
          color={colors.grey[100]}
          fontWeight="bold"
          sx={{ mb: "5px" }}
        >
          GUIA DE USO DEL APP
        </Typography>
        <Typography
          variant="h4"
          color={"#C5B4E3"}
          style={{ paddingBottom: "20px" }}
        >
          ClassConnect
        </Typography>
        <AppIntroduction />
        <ScreenshotSection
          screenshots={[
            login_package,
            profile_package,
            explore_package,
            stream_package,
            modules_package,
            aux_package,
            course_feedback_package,
            todo_package,
          ]}
        />
        <MembersSection />
      </Box>
    </Box>
  );
}
