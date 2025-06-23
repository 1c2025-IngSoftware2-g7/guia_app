"use client";

import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
  Container,
} from "@mui/material";
import {
  School,
  Lock,
  Assignment,
  Notifications,
  Chat,
  Analytics,
} from "@mui/icons-material";
import { tokens } from "../theme";

const features = [
  {
    icon: <School />,
    title: "Gestión de Clases",
    description: "Organiza y administra todas tus clases de manera eficiente",
  },
  {
    icon: <Lock />,
    title: "Seguridad y Privacidad",
    description: "Protege tus datos con autenticación y controles de acceso",
  },
  {
    icon: <Assignment />,
    title: "Tareas y Examenes",
    description: "Gestiona asignaciones y examenes con fechas límite",
  },
  {
    icon: <Notifications />,
    title: "Notificaciones",
    description:
      "Mantente al día con notificaciones push y recordatorios de tareas próximas",
  },
  {
    icon: <Chat />,
    title: "Feedback",
    description: "Alumnos y profesores pueden intercambiar comentarios",
  },
  {
    icon: <Analytics />,
    title: "Seguimiento",
    description:
      "Analiza el progreso y rendimiento académico del curso y de los alumnos",
  },
];

export default function AppIntroduction() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mb="80px" mt="40px">
      <Container maxWidth="lg">
        {/* Introducción Principal */}
        <Box textAlign="center" mb="60px">
          <Typography
            variant="h3"
            fontWeight="bold"
            color={colors.grey[100]}
            sx={{ mb: 2 }}
          >
            ¿Qué es ClassConnect?
          </Typography>

          <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{
              mb: 4,
              maxWidth: 800,
              mx: "auto",
              lineHeight: 1.6,
              fontSize: "1.1rem",
            }}
          >
            ClassConnect es una plataforma educativa innovadora diseñada para
            revolucionar la forma en que estudiantes y profesores interactúan en
            el entorno académico. Nuestra aplicación facilita la gestión de
            clases, la comunicación y el seguimiento del progreso académico de
            manera intuitiva y eficiente.
          </Typography>
        </Box>

        {/* Características Principales */}
        <Box textAlign="center" mb="40px">
          <Typography
            variant="h3"
            fontWeight="bold"
            color={colors.grey[100]}
            sx={{ mb: 2 }}
          >
            Características Principales
          </Typography>
        </Box>
        <Box
          display="grid"
          gridTemplateColumns="repeat(3, 1fr)" // 3 columnas iguales
          gridAutoRows="160px" // altura fija por fila
          gap="20px"
        >
          {features.map((feature, index) => (
            <Box
              key={index}
              gridColumn="span 1"
              backgroundColor={`linear-gradient(145deg, ${colors.primary[400]} 0%, ${colors.primary[600]} 100%)`}
              borderRadius="12px"
              border={`1px solid ${colors.grey[700]}`}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between"
              p={2}
              sx={{
                // background: `linear-gradient(145deg, ${colors.primary[400]} 0%, ${colors.primary[600]} 100%)`,
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                },
              }}
            >
              <Box
                sx={{
                  backgroundColor: colors.greenAccent[400],
                  borderRadius: "50%",
                  width: 50,
                  height: 50,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: colors.grey[900],
                  mb: 1,
                }}
              >
                {feature.icon}
              </Box>

              <Typography
                fontWeight="bold"
                fontSize={16}
                color={colors.grey[100]}
                sx={{ textAlign: "center", mb: 1 }}
              >
                {feature.title}
              </Typography>

              <Typography
                fontSize={13}
                color={colors.grey[300]}
                textAlign="center"
                sx={{
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  lineHeight: 1.4,
                  maxWidth: "100%",
                }}
              >
                {feature.description}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Estadísticas o Info Adicional */}
        {/* <Box
          textAlign="center"
          mt="60px"
          sx={{
            background: `linear-gradient(135deg, ${colors.primary[500]} 0%, ${colors.primary[700]} 100%)`,
            borderRadius: 4,
            p: 4,
            border: `1px solid ${colors.grey[600]}`,
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            color={colors.grey[100]}
            sx={{ mb: 2 }}
          >
            🚀 Desarrollado con Tecnología Moderna
          </Typography>
          <Typography
            variant="body1"
            color={colors.grey[300]}
            sx={{ maxWidth: 700, mx: "auto", lineHeight: 1.6 }}
          >
            A continuacion se pueden ver algunas capturas de pantalla de la
            aplicación
          </Typography>
        </Box> */}
      </Container>
    </Box>
  );
}
