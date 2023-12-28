import React from 'react';
// Person ={ fullName,bio, imgSrc, profession} 
class Profil extends React.Component{
    constructor(){
        super()
        this.state={
            Person : {
                fullName : "Omar Bouattay",
                bio : "They call me Artisto ! ",
                imgSrc : "https://pbs.twimg.com/profile_images/1365430132341694475/n3fcesBv_400x400.jpg",
                profession : "Entrepreneur"
            },
            count : 0
        }
    }

    componentDidMount(){
        setInterval(()=> this.setState({count : this.state.count + 1}), 1000);
    }
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <h2>Profil</h2>
                <h3>{this.state.Person.fullName}</h3>
                <h4>{this.state.Person.bio}</h4>
                {
                    this.state.count>=10 &&  <img src={this.state.Person.imgSrc} alt='Not Found'/>
                }
               
                <h5>{this.state.Person.profession}</h5>
            </div>
        )
    }
}

export default Profil