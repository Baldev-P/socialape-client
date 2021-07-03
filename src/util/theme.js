
export default {//themeFile
  palette: {
    primary: {
      light: '#757ce8',//33c9dc
      main: '#00bcd4',
      dark: '#002884',//008394
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',//ff6333
      main: '#f44336',//ff3d00
      dark: '#ba000d',//b22a00
      contrastText: '#fff',
    }
  },
  typography: {
    useNextVariants: true
  },
  form: {
    textAlign: 'center'
  },
  image: {
    margin: '20px auto 20px auto'
  },
  pageTitle: {
    margin: '10px auto 10px auto'
  },
  textField: {
    margin: '10px auto 10px auto'
  },
  button: {
    margin: '20px auto 20px auto',
    position: 'relative'
  },
  customError: {
    color: 'red',
    fontSize: '0.8rem',
    marginTop: 10
  },
  progress: {
    position: 'absolute'
  },
  invisibleSeparator: {
    border: 'none',
    margin: 4
  },
  visibleSeparator:{
    width:'100%',
    borderBottom:'1px solid rgbs(0,0,0,0.1)',
    marginBottom:20
  }
};
