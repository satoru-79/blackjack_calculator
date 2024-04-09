import "./App.css"
import "./Infomation.css"
import {useNavigate} from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const Infomation = () => {

    const navigate = useNavigate();
    const miniFont = useMediaQuery({ query:'(max-width: 480px)'})

    return (
        <div className="App">
            <header className="App-header">
                <div style={{display:"flex", flexDirection:"row",width:"70%"}}>
                    <img src='icon.png' className='header-icon' alt=''
                         onClick={() => navigate('/')}
                    />
                    <p className='title'
                       style={{fontSize:miniFont && "12px"}}
                    >
                        ブラックジャック確率計算ツール
                    </p>
                </div>
                <div className='info-area' onClick={() => navigate("/infomation")}>         
                    <img src='image/infomation.png' alt='' className='info-img'/>
                    <div className='info-title flex-center'>
                         <p className='info-text'
                            style={{fontSize:miniFont && "10px"}}
                         >
                            ツールの詳細
                        </p>
                    </div>
                </div>
            </header>
            <div className="info-main">
                <div className="info-container">
                    <h3>概要</h3>
                    <p className="info-p">このツールは、トランプゲーム「ブラックジャック」を想定した確率計算ツールです。</p>
                    <p className="info-p">
                        ディーラーのハンド、自分のハンド、※自分のスプリットハンド、他のプレイヤーのハンドをそれぞれ設定すると、
                        下の表に、ヒットした際に手札の合計がいくつになるかの確率を表示します。
                    </p>
                    <div style={{display:"flex", flexDirection:"row"}}>
                        <p className="info-p" style={{minWidth:"100px"}}>
                            ※ スプリット :
                        </p>
                        <p className="info-p">
                            最初に配られる2枚のカードが同じ数字のとき、
                            その2枚を1枚ずつの2つのハンドに分けることができるというルール。
                        </p>
                    </div>
                    <h3>確率計算の方法</h3>
                    <p className="info-p">
                        (該当する場合の数) ÷ (全ての場合の数) × 100 で求めています。
                    </p>
                    <p className="info-p">
                        例えば、ディーラーのアップカードが 5、自分のハンドが [ 2 , 5 ] のとき ( 自分以外のプレイヤーなし、デッキは52枚1セット ) 
                        、自分が1回ヒットしたときに合計が17になる確率は、(該当する場合の数) = 引いたカードが10の場合なので、16通り。 
                        (全ての場合の数) = デッキの残りのの枚数なので 49通り。よって 16 ÷ 49 × 100 = 32.7% (少数第2位を四捨五入)となります。
                    </p>
                    <p className="info-p">
                        Aを含んだ場合は、基本的には、1とみなした場合と11とみなした場合の2回分場合の数をカウントしています。
                    </p>
                    <p className="info-p"> 
                        ただ例外として、どちらの場合でも同じ項目に該当する場合は片方だけをカウントします。
                        また、「11とみなすとbustするが、1とみなすとbustしない」場合は、1の場合のみをカウントします。
                    </p>
                </div>
            </div>
        </div>
        
    )

}

export default Infomation