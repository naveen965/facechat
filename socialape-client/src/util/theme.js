export default {
  palette: {
    primary: {
      light: '#4D8DCD',
      main: '#1976D2',
      dark: '#004991',
      contrastText: '#fff'
    },
    secondary: {
      light: '#FD3535',
      main: '#B80000',
      dark: '#910000',
      contrastText: '#fff'
    },
    thirdary: {
      light: '#2CEE8E',
      main: '#119855',
      dark: '#005429',
      contrastText: '#fff'
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  form: {
      textAlign: 'center',
  },
  image: {
      margin: '20px auto 20px auto'
  },
  pageTitle: {
      margin: '10px auto 10px auto'
  },
  button: {
      width: '100%',
      marginTop: 20,
      position: 'relative'
  },
  TextField: {
      margin: '10px auto 10px auto'
  },
  customError: {
      color: 'red',
      fontSize: '0.8rem',
      marginTop: 10
  },
  progress: {
      position: 'absolute'
  },
  smll: {
      marginTop: 20,
  },
  card: {
    display: 'flex',
    marginBottom: 20
  },
  cardContent: {
      width: '100%',
      flexDirection: 'column',
      padding: 25
  },
  cover: {
      minWidth: 200,
      objectFit: 'cover'
  },
  handle: {
      width: 60,
      height: 18,
      backgroundColor: "#00bcd4",
      marginBottom: 7
  },
  date: {
      height: 14,
      width: 100,
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      marginBottom: 10
  },
  fullLine: {
      height: 15,
      width: '90%',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      marginBottom: 10
  },
  halfLine: {
      height: 15,
      width: '50%',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      marginBottom: 10
  },
}