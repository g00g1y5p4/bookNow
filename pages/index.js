import React from 'react'
import Login from '../components/Login'
import Cards from '../components/Cards'
import style from "../styles/App.module.css"
class App extends React.Component{
  render(){
    return(
      <div className={style.rowC}>
          <Cards
            img = "https://media.istockphoto.com/photos/orange-moon-over-great-waterfall-picture-id1335204730?b=1&k=20&m=1335204730&s=170667a&w=0&h=CyF5uOci9jFq2qPGuMqvKmO2ogt5i_Jjd07-a5B-b9Y="
            title = "Movie Title"
            genre = "Comedy/Thriller"
          /> 
           <Cards
            img = "https://media.istockphoto.com/photos/orange-moon-over-great-waterfall-picture-id1335204730?b=1&k=20&m=1335204730&s=170667a&w=0&h=CyF5uOci9jFq2qPGuMqvKmO2ogt5i_Jjd07-a5B-b9Y="
            title = "Movie Title"
            genre = "Comedy/Thriller"
          /> 
      </div>

      
    )
  }
  //  
}
export default App;

