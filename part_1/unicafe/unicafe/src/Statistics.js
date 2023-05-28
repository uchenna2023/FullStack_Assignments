import React from 'react'

const Statistics = ({good, neutral, bad, showStat}) => {
    if (showStat === 'true') {
        return (
            <div>
                <h2>Statistics</h2>
                <table>
                    <tr>
                        <td>Good</td>
                        <td>{good}</td>
                    </tr>
                    <tr>
                        <td>Neutral</td>
                        <td>{neutral}</td>
                    </tr>
                    <tr>
                         <td>Bad</td>
                        <td>{bad}</td>
                    </tr>
                    <tr>
                        <td>All</td>
                        <td>{good + neutral + bad}</td>
                    </tr>
                    <tr>
                        <td>Average</td>
                        <td>{(good + neutral + bad) / 3}</td>
                    </tr>
                    <tr>
                        <td>Positive</td>
                        <td>{~~((good/(good + neutral + bad))*100)} %</td>
                    </tr>
                </table>
            </div>
          )
    }

    else {
        return (
            <p>No feedback given</p>
        )
    }

  
}

export default Statistics