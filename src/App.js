import './App.css';
import { useMediaQuery } from 'react-responsive';
import Deck from './component/Deck';
import PlayerList from './component/PlayerList';
import CardList from './component/CardList';
import Table from './component/Table';
import Delete from './component/Delete';
import Reset from './component/Reset';
import {useState, useEffect } from 'react';

function App() {
  //レスポンシブ対応用の変数
  const isDesktop = useMediaQuery({ query: '(min-width: 800px)' })
  const tableRow = useMediaQuery({ query: '(min-width: 750px)'})
  const max300 = useMediaQuery({ query:'(max-width: 300px'})

  const [you, setYou] = useState({ name: "YOU", total: [0], poss: [],
  tableData :[
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    ] });
  
  const [you2, setYou2] = useState({ name: "YOU2", total: [0], poss: [],
  active: false, tableData :[
                  [0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0],
                 ] 
  })

  const [dealer, setDealer] = useState({name: "DEALER",total: [0],poss: [],
  tableData : [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    ]});


  const [players, setPlayers] = useState([]);

  /*--デッキのトランプの状態を管理する変数--*/
  const [deck, setDeck] = useState([]);
  const [deckNum, setDeckNum] = useState(0);

  useEffect(() => {
    if (deckNum === 0) changeDeck("add");
    if (players.length === 0) {
      for(let i = 2; i < 6; i++) {
        setPlayers((prevPlayers) => [
          ...prevPlayers,
          {
            name: `player ${i}`,
            total: [0],
            poss: [],
            key: i * 100,
            active: false
          },
        ]);
      }
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  /*--デッキの数を変更する関数--*/
  const changeDeck = (type) => {

    /*--デッキを1セット増やす処理--*/
    if (type === "add") {
      const newDeck = [...deck];
      for (let j = 1; j <= 13; j++) {
        for (let i = 0; i < 4; i++) {
          newDeck.push({
            suit: i,
            number: j,
            handed: "",
            key: 52 * deckNum + 13 * i + j,
          });
        }
      }
      setDeck(newDeck);
      calcPossibility(you,newDeck);
      calcPossibility(dealer,newDeck);
      setDeckNum(deckNum + 1);

      /*--デッキを1セット減らす処理--*/
    } else if (type === "delete") {
      if (you.poss.some(card => card.key > ((deckNum - 1) * 52))) resetHand(you);
      if (dealer.poss.some(card => card.key > ((deckNum - 1) * 52))) resetHand(dealer);
      players.forEach((player) => {
        if (player.poss.some(card => card.key > ((deckNum - 1) * 52))) resetHand(player);
      })
      const newDeck = deck.filter((card) => card.key <= (deckNum - 1) * 52);
      setDeck(newDeck);
      setDeckNum(deckNum - 1);
      calcPossibility(you,newDeck);
      calcPossibility(dealer,newDeck);
    }
  }

  /*--usedエリアのカードを山札に戻す関数--*/
  const shuffleCards = () => {
    const newDeck = [...deck];
    newDeck.filter((card) => card.handed === "used").forEach((target) => target.handed = "");
    setDeck(newDeck);
    calcPossibility(you,newDeck);
    calcPossibility(dealer, newDeck);
  }


  /*--プレイヤー数の変化に合わせてプレイヤーの追加、削除を行う関数--*/
 const changePlayers = (type,target) => {
    if (type === "add") {
      const newPlayers = [...players]
      newPlayers.filter((player) => player.name === target)[0].active = true;
      setPlayers(newPlayers);
      console.log(newPlayers);
    } else if (type === "delete") {
      const target = players.filter((player) => player.name === `PLAYER `)
      const newPlayers = players.filter(
        (player) => player.name !== target[0].name
      );
      setPlayers(newPlayers);
      if (target.poss.length !== 0) resetHand(target[0])
    }
  }


  /*--手札の数字の合計を計算する関数--*/
  const calcTotal = (owner) => {
    console.log(`calctotal : ${owner.name}`)
    owner.total=[0];
    const newOwner = owner;
    newOwner.poss.forEach((card) => {
      let number = 0;
      if (card.number > 10) number = 10;
      else number = card.number;
      for (let i = 0; i < owner.total.length; i++) {
        newOwner.total[i] += number;
      }
      if (card.number === 1) {
        const max = Math.max.apply(null, newOwner.total);
        if(max + 10 < 22) newOwner.total.push(max + 10);
      }
    })

    //21ができたら必ず手札を21とみなす
    if(owner.total.includes(21)) owner.total = [21];
  
  };

  
  /*--テーブルの内容を更新する関数--*/
  const calcPossibility = (owner, deck) => {
    console.log(`calcpos : ${owner.name}`)
    const newDeck = deck.filter((card) => card.handed === "");
    let [sixteen1,seventeen1,eighteen1,nineteen1,twenty1,blackjack1,bust1] = [0,0,0,0,0,0,0];
    let [sixteen2,seventeen2,eighteen2,nineteen2,twenty2,blackjack2,bust2] = [0,0,0,0,0,0,0];

    //--想定した手札の合計がテーブルのどの位置に当たるかを求める関数--//
    const identifyNumber = (number,index,hit) => {
      if (hit === 1) {
        if ((number <= 16) && (index === 0))  sixteen1   += 1; 
        if (number === 17)                    seventeen1 += 1;
        if (number === 18)                    eighteen1  += 1;
        if (number === 19)                    nineteen1  += 1;
        if (number === 20)                    twenty1    += 1;
        if (number === 21)                    blackjack1 += 1;
        if ((number > 21)  && (index === 0))  bust1      += 1;
      } else if (hit === 2) {
        if      (number <= 16)                    sixteen2   += 1
        if      (number === 17)                    seventeen2 += 1;
        if      (number === 18)                    eighteen2  += 1;
        else if (number === 19)                    nineteen2  += 1;
        else if (number === 20)                    twenty2    += 1;
        else if (number === 21)                    blackjack2 += 1;
        else if ((number > 21)  && (index === 0))  bust2      += 1;
      }
    }
    

    owner.total.map((number,index) => {
      
      //山札にあるカードをそれぞれ引いた時のことを考えるためdeckをforEach
      newDeck.forEach((card) => {
        /*--1Hit時の確率計算--*/
        let cardNum =card.number;
        if (card.number > 10)  cardNum = 10;
        let newNumber = number + cardNum;
        identifyNumber(newNumber,index,1);
        if(cardNum === 1) {
          if((number > 5) && (number < 11) ) identifyNumber(newNumber + 10,index,1);
        }

        /*--2Hit時の確率計算--*/
        let newDeck2 = newDeck.filter((element) => element.key !== card.key);
        newDeck2.forEach((card2) => {
          let cardNum2 = card2.number;
          if(card2.number > 10) cardNum2 = 10;
          let newNumber2 = newNumber + cardNum2;
          identifyNumber(newNumber2,index,2);
          if(cardNum2 === 1) {
            if((newNumber > 5) && (newNumber < 11) ) identifyNumber(newNumber2 + 10,index,2);
          }
        })
      })
    })

    //テーブルの値を更新
    owner.tableData[0][0] = ((sixteen1 / newDeck.length)  * 100).toPrecision(3)
    owner.tableData[0][1] = ((seventeen1 / newDeck.length)* 100).toPrecision(3)
    owner.tableData[0][2] = ((eighteen1 / newDeck.length) * 100).toPrecision(3)
    owner.tableData[0][3] = ((nineteen1 / newDeck.length) * 100).toPrecision(3)
    owner.tableData[0][4] = ((twenty1   / newDeck.length) * 100).toPrecision(3)
    owner.tableData[0][5] = ((blackjack1/ newDeck.length) * 100).toPrecision(3)
    owner.tableData[0][6] = ((bust1     / newDeck.length) * 100).toPrecision(3)
    owner.tableData[1][0] = ((sixteen2 / newDeck.length  / (newDeck.length - 1)) * 100).toPrecision(3)
    owner.tableData[1][1] = ((seventeen2 / newDeck.length/ (newDeck.length - 1)) * 100).toPrecision(3)
    owner.tableData[1][2] = ((eighteen2 / newDeck.length / (newDeck.length - 1)) * 100).toPrecision(3)
    owner.tableData[1][3] = ((nineteen2 / newDeck.length / (newDeck.length - 1)) * 100).toPrecision(3)
    owner.tableData[1][4] = ((twenty2   / newDeck.length / (newDeck.length - 1)) * 100).toPrecision(3)
    owner.tableData[1][5] = ((blackjack2/ newDeck.length / (newDeck.length - 1)) * 100).toPrecision(3)
    owner.tableData[1][6] = ((bust2     / newDeck.length / (newDeck.length - 1)) * 100).toPrecision(3)
    // console.log(`owner : ${owner.name}`);
    //console.log(`seventeen~bust : ${seventeen2}, ${eighteen2}, ${nineteen2}, ${twenty2}, ${blackjack2}, ${bust2}`)
    
  }

  /*--手札にカードを追加する関数--*/
  const addCard = (card, owner) => {
    const newDeck = [...deck];
    const target = newDeck.filter((element) => element.key === card.key);
    target[0].handed = owner.name;
    setDeck(newDeck);
    owner.poss.push(card);
    calcTotal(owner);
    console.log(owner)

    //誰かが手札を増やすたびに残りの山札から確率を計算する
    calcPossibility(you, deck);
    calcPossibility(dealer,deck);
    calcPossibility(you2,deck);
  };


  /*--手札をリセットする関数--*/
  const resetHand = (owner) => {
    const newDeck = [...deck];
    const target = newDeck.filter((card) => card.handed === owner.name)
    //usedに表示させるためにhandedをusedにする
    target.map((card) => {
      card.handed = "used";
    })
    setDeck(newDeck);

    const newOwner = owner;
    newOwner.poss = [];
    newOwner.total = [0];

    if (owner.name === "YOU") setYou({...owner, poss: [], total: [0]});
    else if (owner.name === "YOU2") setYou2({...owner, poss: [], total: [0]});
    if (owner.name === "DEALER") setDealer({...owner, poss: [],total: [0]}); 
    calcPossibility(you,deck); 
    calcPossibility(dealer,deck);
    if (you2.active === true) calcPossibility(you2,deck);
  }

  /*--手札を一枚山札に戻す関数--*/
  const deleteCard = (owner) => {
    if(owner.poss.length > 0){
      const newOwner = owner;
      const target = newOwner.poss[owner.poss.length - 1];
      const newDeck = [...deck];
      const card = newDeck.filter((card) => card.key === target.key);
      card[0].handed = "";
      setDeck(newDeck);
      newOwner.poss.pop();
      calcTotal(newOwner);

      if (owner.name === "YOU") {
       setYou({...owner, poss: newOwner.poss, total: newOwner.total});
      } 
      else if (owner.name === "YOU2") {
        setYou2({...owner, poss: newOwner.poss, total: newOwner.total});
      } else if (owner.name === "DEALER") {
        setDealer({...owner, poss: newOwner.poss, total: newOwner.total});
      }

      calcPossibility(dealer,deck);
      calcPossibility(you, deck);
      if (you2.active === true) calcPossibility(you2,deck);
    }
  }   




  

 
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

              <div className='deck-area flex-center' >
                <div className='name-area flex-center'>
                  <p className='text'
                     style={{fontSize: max300 && "12px"}}
                  >
                    USED
                  </p>
                </div>
                <Deck deck={deck} shuffleCards={shuffleCards} deckNum={deckNum} type={"used"}/>
              </div>
              <div className='dealer-area'>
                <div className='name-area flex-center'>
                  <div className='flex-center' style={{width:"65%"}}>
                    <p className='text'
                       style={{fontSize: max300 && "12px"}}
                    >
                      DEALER
                    </p>
                  </div>
                  <div className='btn-area flex-center'>
                    <Delete owner={dealer} deleteCard={deleteCard}/>
                    <Reset owner={dealer}  resetHand={resetHand}/>
                  </div>
                </div>
                <div className='score-area flex-center'>
                  { Math.min.apply(null, dealer.total) > 21
                  ? <p className='text'>bust</p>
                  : Math.max.apply(null, dealer.total) < 22 
                  ? <p className='text'>{Math.max.apply(null, dealer.total)}</p>
                  : <p className='text'>{Math.min.apply(null, dealer.total)}</p>}
                </div>
                <div className='hand-area flex-center'>
                    <CardList deck={deck} owner={dealer} addCard={addCard}/>
                </div>
              </div>
              <div className='deck-area flex-center' >
                  <div className='name-area flex-center'>
                  <p className='text'
                     style={{fontSize: max300 && "12px"}}
                  >
                    DECK
                  </p>
                </div>
                <Deck deck={deck} changeDeck={changeDeck} deckNum={deckNum} type={"deck"}/>
              </div>
            </div>

            <div className='lower-area'>
                <PlayerList players={players} deck={deck} addCard={addCard} 
                            deleteCard={deleteCard} resetHand={resetHand} you={you}
                            you2={you2} setYou2={setYou2}
                            changePlayers={changePlayers} max300={max300}/>
            </div>
          </div>
        </div>
        <div className='table-area' 
             style={{
                width: isDesktop ? "90%" : "100%",
                height: tableRow ? "35%" : "22.5%" , 
                flexDirection : tableRow ? "row" : "column"}}
        >
          <Table  owner={dealer}    isDesktop={isDesktop} tableRow={tableRow}/>
          <Table  owner={you} isDesktop={isDesktop} tableRow={tableRow}/>
        </div>
      </div>
    </div>
  );
}

export default App;
