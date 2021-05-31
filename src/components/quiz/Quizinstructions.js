

import React,{ Fragment} from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import answer from '../../assets/img/answer.gif';
import fiftyFifty from '../../assets/img/fiftyFifty.gif';
import hints from '../../assets/img/hints.gif';
import options from '../../assets/img/options.gif';





const QuizIntructions = () => (
<Fragment>
<Helmet><title>Cours </title></Helmet>


<div className="instructions container">
    <h1>Information</h1>
    <p>Bonjour Chez navigateur, tu trouveras ici toutes les informations dont tu auras besoin pour réussir le test.</p>
    <p>Tu peux d'ors et déjà commencer le test, si te sens près mais je conseillerais de descendre à peu plus bas pour utiliser les ressources que nous mettons à ta disposition.</p>
    <div className="button">
    <span className="left"><Link to='/'>Menu</Link></span>
        <span className="right"><Link to='/play/Quiz'> Quiz</Link></span>
    </div>
    </div>

   
    <div className="instructions container">
    <h1>A)Compter en dotrhatki </h1>
    
    <table className="browser-default" id="main-list">
   
   <caption>List de voocabulaire</caption>
   <thead>
     <tr>
       <th scope="col">#</th>
       <th scope="col">First</th>
       <th scope="col">Last</th>
       <th scope="col">Handle</th>
       <th scope="col">Handle</th>
     </tr>
   </thead>
   <tbody>
     <tr>
       <th scope="row">1</th>
       <td>Mark</td>
       <td>Otto</td>
       <td>@mdo</td>
     </tr>
     <tr>
       <th scope="row">2</th>
       <td>Jacob</td>
       <td>Thornton</td>
       <td>@fat</td>
     </tr>
     <tr>
       <th scope="row">3</th>
       <td>Larry</td>
       <td>the Bird</td>
       <td>@twitter</td>
     </tr>
   </tbody>
 </table>

 <h2> Explications </h2>
 <p> Les nombres supérieurs à 20 sont composés (au moins) de deux mots, en utilisant le connecteur ma. Ma peut
contrat pour le dernier «chiffre» du numéro. Par exemple, 21 est chakat ma at, ou chakat m’at et
2431 est akat dalen ma torken ma chisen ma at, ou akat dalen ma torken ma chisen m’at.
Les nombres ordinaux se terminent par le suffixe -ak et sont considérés comme des noms animés. mekak, par exemple, devrait être considéré comme "le cinquième". Cependant, si l'ordinal modifie un nom, utilisez
la forme génitive du nombre à la place. Par exemple, hrazef mekaki, "le cinquième cheval"! </p>
    </div> 
    <div className="instructions container">
    <h1>B) Vocabulaire </h1>

 


        </div>

       
    
    


  

   



    
   
  
</Fragment>

);


export default QuizIntructions; 