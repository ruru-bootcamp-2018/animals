import React from 'react'
import data from '../../server/public/data'
import {Link} from 'react-router-dom'
import Answer from'./Answer'


class Animal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            desc:'a sweet component'
        }
    }

    render() {
      const category=this.props.category
      const animalArray=data[category]
        return (
            <div className="animalWrap">
                <ul>
                  {animalArray.map(
                    (animal) => {
                     return (
                       <li className="animalSil">
                         <Link to={`/snood/${category}/${animal.name}/answer`}>
                         <img src={animal.silhouette} />
                       </Link>
                      </li>)
                    }
                  )}
                </ul>

            </div>
        )
    }
}

export default Animal
