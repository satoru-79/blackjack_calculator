import './App.css';
import { useMediaQuery } from 'react-responsive';
import {useState } from 'react';
import {v4 as uuidv4} from "uuid";

function App() {
  //レスポンシブ対応用の変数
  const isDesktop = useMediaQuery({ query: '(min-width: 800px)' })
  const tableRow  = useMediaQuery({ query: '(min-width: 750px)' })
 
  return (
    <div className="App">
      <header className="App-header">
        <img src='icon.png' className='header-icon' alt=''/>
        <p className='title'>ブラックジャック確率計算ツール</p>
      </header>
      <div className='main'>
        <div className='board' style={{width: isDesktop ? "70%" : "100%"}}>
          <div className='container'>

            <div className='upper-area'>

              <div className='deck-area'>
                <div className='name-area flex-center'>
                  <p className='text'>USED</p>
                </div>
                <div className='deck'>
                  <img src='image/Bicyclebackside.jpg' alt='' className='card-img'/>
                </div>
              </div>

              <div className='dealer-area'>
                <div className='name-area flex-center'>
                  <p className='text'>〜DEALER〜</p>
                </div>
                <div className='score-area flex-center'>
                  <p className='text'>21</p>
                </div>
                <div className='hand-area flex-center'>
                  <img src='image/cards/s1.png' alt='' className='card-img'/>
                </div>
              </div>

              <div className={'deck-area'}>
                <div className='name-area flex-center'>
                  <p className='text'>DECK</p>
                </div>
                <div className='deck'>
                  <img src='image/Bicyclebackside.jpg' alt='' className='card-img'/>
                </div>
              </div>
            </div>

            <div className='lower-area'>
              <div className='player-area'>
                <div style={{display:"flex",alignItems: "flex-start", height:"100%", width:"20%"}}>
                  <div className='player1' style={{height:"50%",  width:"100%"}}>
                    <div className='name-area flex-center'>
                      <p className='text'>player2</p>
                    </div>
                    <div className='score-area flex-center'>
                      <p className='text'>21</p>
                    </div>
                    <div className='hand-area flex-center'>
                      <img src='image/cards/s1.png' alt='' className='card-img'/>
                    </div>
                  </div>
                </div>
                <div style={{display:"flex",alignItems: "flex-end", height:"100%", width:"20%"}}>
                  <div className='player1' style={{height:"50%", width:"100%"}}>
                    <div className='name-area flex-center'>
                      <p className='text'> player3</p>
                    </div>
                    <div className='score-area flex-center'>
                      <p className='text'>21</p>
                    </div>
                    <div className='hand-area flex-center'>
                      <img src='image/cards/s1.png' alt='' className='card-img'/>
                    </div>
                  </div>
                </div>
                <div style={{display:"flex",alignItems: "flex-start", height:"100%", width:"20%"}}>
                  <div className='player1' style={{height:"50%",  width:"100%"}}>
                    <div className='name-area flex-center'>
                      <p className='text'> you</p>
                    </div>
                    <div className='score-area flex-center'>
                      <p className='text'>21</p>
                    </div>
                    <div className='hand-area flex-center'>
                      <img src='image/cards/s1.png' alt='' className='card-img'/>
                    </div>
                  </div>
                </div>
                <div style={{display:"flex",alignItems: "flex-end", height:"100%", width:"20%"}}>
                  <div className='player1' style={{height:"50%", width:"100%"}}>
                    <div className='name-area flex-center'>
                      <p className='text'> player4</p>
                    </div>
                    <div className='score-area flex-center'>
                      <p className='text'>21</p>
                    </div>
                    <div className='hand-area flex-center'>
                      <img src='image/cards/s1.png' alt='' className='card-img'/>
                    </div>
                  </div>
                </div>
                <div style={{display:"flex",alignItems: "flex-start", height:"100%", width:"20%"}}>
                  <div className='player1' style={{height:"50%", width:"100%"}}>
                  <div className='name-area flex-center'>
                      <p className='text'> player5</p>
                    </div>
                    <div className='score-area flex-center'>
                      <p className='text'>21</p>
                    </div>
                    <div className='hand-area flex-center'>
                      <img src='image/cards/s1.png' alt='' className='card-img'/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='table-area' 
             style={{
              width: isDesktop ? "90%" : "100%",
              flexDirection : tableRow ? "row" : "column"}}>
          <div className='dealer-table'  style={{width: tableRow ? "50%" : "100%"}}>
            <div className='name-area flex-center'>
              <p className='text' style={{color:"black"}}>DEALER</p>
            </div>
            <table border={1}>
              <thead>
                <tr>
                  <th></th>
                  <th>~16</th>
                  <th>17</th>
                  <th>18</th>
                  <th>19</th>
                  <th>20</th>
                  <th>21</th>
                  <th>bust</th>
                </tr>
              </thead>
              <thead>
                <tr>
                  <td>1HIT</td>
                  <td>1.00</td>
                  <td>1.00</td>
                  <td>1.00</td>
                  <td>1.00</td>
                  <td>1.00</td>
                  <td>1.00</td>
                  <td>1.00</td>
                </tr>
              </thead>
              <thead>
                <tr>
                  <td>2HIT</td>
                  <td>1.00</td>
                  <td>1.00</td>
                  <td>1.00</td>
                  <td>1.00</td>
                  <td>1.00</td>
                  <td>1.00</td>
                  <td>1.00</td>
                </tr>
              </thead>
            </table>

          </div>
          <div className='dealer-table'  style={{width: tableRow ? "50%" : "100%"}}>
            <div className='name-area flex-center'>
              <p className='text' style={{color:"black"}}>YOU</p>
            </div>
            <table border={1}>
              <thead>
                <tr>
                  <th></th>
                  <th>~16</th>
                  <th>17</th>
                  <th>18</th>
                  <th>19</th>
                  <th>20</th>
                  <th>21</th>
                  <th>bust</th>
                </tr>
              </thead>
              <thead>
                <tr>
                  <td>1HIT</td>
                  <td>1.00</td>
                  <td>1.00</td>
                  <td>1.00</td>
                  <td>1.00</td>
                  <td>1.00</td>
                  <td>1.00</td>
                  <td>1.00</td>
                </tr>
              </thead>
              <thead>
                <tr>
                  <td>2HIT</td>
                  <td>1.00</td>
                  <td>1.00</td>
                  <td>1.00</td>
                  <td>1.00</td>
                  <td>1.00</td>
                  <td>1.00</td>
                  <td>1.00</td>
                </tr>
              </thead>
            </table>

          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
