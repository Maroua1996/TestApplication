import React,{Component} from 'react';
import { Helmet } from 'react-helmet';
import {Link} from 'react-router-dom';
import boo from '../../assets/img/boo.gif';

import answer from '../../assets/img/answer.gif';
import unpetiteffort from '../../assets/img/unpetiteffort.webp';
import options from '../../assets/img/options.gif';
import yatta from '../../assets/img/Yatta.gif'

const images = [
    { id: 1, src: '../../assets/img/answer.gif', title: 'foo', description: 'bar' },
    { id: 2, src: '../../assets/img/answer.gif', title: 'foo', description: 'bar' },
    { id: 3, src: '../../assets/img/hints.gif', title: 'foo', description: 'bar' },
    { id: 4, src: '../../assets/img/options.gif', title: 'foo', description: 'bar' },
    { id: 5, src: '../../assets/img/fiftyFifty.gif', title: 'foo', description: 'bar' },
   
  ];
  



class QuizSummary extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            score: 0,
            numberOfQuestions: 0,
            numberOfAnsweredQuestions: 0,
            correctAnswers : 0,
            wrongAnswers:0,
            HintsUsed: 0,
            fiftyFiftyUsed:0
        }
    }
    componentDidMount(){
        const {state} = this.props.location;
        this.setState({ 
           score: (state.score / state.numberOfQuestions) * 100,
            numberOfQuestions: state.numberOfQuestions,
            numberOfAnsweredQuestions: state.numberOfAnsweredQuestions,
            correctAnswers : state.correctAnswers,
            wrongAnswers:state.wrongAnswers,
            usedHints: state.hinsUsed,
            fiftyFiftyUsed:state.fiftyFiftyUsed});
    }
render(){
    const {state, score} = this.props.location;
    let stats, remark,img;
    const userscore = this.state.score;
    if(userscore <= 30){
        remark = 'Aie... il faut plus pratiquer...';
        img = boo;
    }
        else{ 
    if(userscore > 30 && userscore <= 50){
        remark = 'Mouaip... peu faire mieux,non ?';
        img = answer;
    }else if(userscore <= 70 && userscore > 50){
        remark = 'Vous y étez presque ! encore un petit effort! ';
        img = unpetiteffort;
    }
    else if(userscore >= 71 && userscore > 84){
        remark = 'Bien joué ! Presque un sans faute!!';
        img = options;
    }else{
        remark = "BRAVO ! ";
        img = yatta ;
    }}
        
        if(state !== undefined){
stats = ( <> 
<div> 
    
    </div>
  <div className="r"> 
    <h1>Fin du Quizz</h1>
    </div>
    <div className="container v">
    <div className="t"> 
    
    <h2>Ton score est de {this.state.score.toFixed(0)}&#37;</h2>
    <img src={img} alt="Logo" />
    <h4>{remark}</h4>
       
        </div>
      
        <div class="f">
        <span className="stat left">Nombre total de questions : </span>
        <span className="right">{this.state.numberOfQuestions}</span><br>
        </br>
        {/* <span className="stat left">Nombre total de attempted questions : </span>
        <span className="right">{this.state.numberOfAnsweredQuestions}</span><br>
        </br> */}
        <span className="stat left">Nombre total de bonne reponses : </span>
        <span className="right">{this.state.correctAnswers}</span><br>
        </br>
        <span className="stat left">Nombre total de mauvaise reponses : </span>
        <span className="right">{this.state.wrongAnswers}</span><br>
        </br> 
        </div>
    </div>
    <section className="texte">
        <ul>
<li>
    <Link to ="/">
        Retour au menu Principal 
    </Link>
</li>
<li>
    <Link to ="/play/quiz">
        Réessayer 
    </Link>
</li>

        </ul>
    </section>
    </>
    );
    }else{
stats = (
   
    <>
     <section>
    <h1 className="no-stats"> Pas de statistiques valables </h1>
    <ul>
<li>
<Link to ="/">
    Retour au menu Principal 
</Link>
</li>
<li>
<Link to ="/play/quiz">
     faire le test 
</Link>
</li>

    </ul>
    </section>
</>
);
    }
    
    return(<>

<Helmet><title>Resultat</title></Helmet>
{stats}
</>
    )

}



}

export default QuizSummary;