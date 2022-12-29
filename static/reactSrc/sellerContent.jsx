function SMContext () {
    const [oneIsTouched, setOneIsTouched] = React.useState(true);
  const [twoIsTouched, setTwoIsTouched] = React.useState(true);
  const [thirdIsTouched, setThirdIsTouched] = React.useState(true);
  const [fourIsTouched, setFourIsTouched] = React.useState(true);
  const [fiveIsTouched, setFiveIsTouched] = React.useState(true);
  const [sixIsTouched, setSixIsTouched] = React.useState(true);
  const [sevenIsTouched, setSevenIsTouched] = React.useState(true);
  const [eightIsTouched, setEightIsTouched] = React.useState(true);
  function                                                           oneChange(){
    setOneIsTouched(!oneIsTouched);
  }
  function twoChange(){
    setTwoIsTouched(!twoIsTouched);
  }
  function thirdChange(){
    setThirdIsTouched(!thirdIsTouched);
  }
  function fourChange(){
    setFourIsTouched(!fourIsTouched);
  }
  function fiveChange(){
    setFiveIsTouched(!fiveIsTouched);
  }
  function sixChange(){
    setSixIsTouched(!sixIsTouched);
  }
  function sevenChange(){
    setSevenIsTouched(!sevenIsTouched);
  }
  function eightChange(){
    setEightIsTouched(!eightIsTouched);
  }
  return (
    <div className='page-content-wrapper'>
      <div className='flex-box'>
        <div className='content'>
          <div className='flex-box'>
            <div className='main-column'>
              <div className='card-offset card-1'>
                <div className='title'>     
                  待辦事項清單
                  <p className='card-tips'>您的待處理事項</p>
                </div>
                <div className='async-data-wapper'>
                  <div className='status'>
                    <div className='to-do-box'>
                      <a href='test.com' className='to-do-box-aitem pending-paid-anchor' onMouseEnter={oneChange} onMouseLeave={oneChange} style={{backgroundColor:`${oneIsTouched ? "aliceblue": "#aacbde"}`}}>
                        <p className='item-tltle pending-paid-value'>0</p>
                        <p className='item-desc'>待付款訂單</p>
                      </a>

                      <a href='test.com' className='to-do-box-aitem pending-proccess-anchor'onMouseEnter={twoChange} onMouseLeave={twoChange} style={{backgroundColor:`${twoIsTouched ? "aliceblue": "#aacbde"}`}}>
                        <p className='item-tltle pending-proccess-value'>0</p>
                        <p className='item-desc'>待處理訂單</p>
                      </a>

                      <a href='test.com' className='to-do-box-aitem have-proccess-anchor'onMouseEnter={thirdChange} onMouseLeave={thirdChange} style={{backgroundColor:`${thirdIsTouched ? "aliceblue": "#aacbde"}`}}>
                        <p className='item-tltle have-proccess-value'>0</p>
                        <p className='item-desc'>已處理訂單</p>
                      </a>

                      <a href='test.com' className='to-do-box-aitem pending-cancel-anchor'onMouseEnter={fourChange} onMouseLeave={fourChange} style={{backgroundColor:`${fourIsTouched ? "aliceblue": "#aacbde"}`}}>
                        <p className='item-tltle pending-cancel-value'>0</p>
                        <p className='item-desc'>待取消訂單</p>
                      </a>

                      <a href='test.com' className='to-do-box-aitem pending-return-anchor' onMouseEnter={fiveChange} onMouseLeave={fiveChange} style={{backgroundColor:`${fiveIsTouched ? "aliceblue": "#aacbde"}`}}>
                        <p className='item-tltle pending-return-value'>0</p>
                        <p className='item-desc'>待退款/退貨訂單</p>
                      </a>

                      <a href='test.com' className='to-do-box-aitem banned-anchor' onMouseEnter={sixChange} onMouseLeave={sixChange} style={{backgroundColor:`${sixIsTouched ? "aliceblue": "#aacbde"}`}}>
                        <p className='item-tltle ban-value'>0</p>
                        <p className='item-desc'>已禁賣/搜尋排序降低商品</p>
                      </a>
                      <a href='test.com' className='to-do-box-aitem sold-out-anchor'onMouseEnter={sevenChange} onMouseLeave={sevenChange} style={{backgroundColor:`${sevenIsTouched ? "aliceblue": "#aacbde"}`}}>
                        <p className='item-tltle sold-out-value'>0</p>
                        <p className='item-desc'>已售完商品</p>
                      </a>

                      <a href='test.com' className='to-do-box-aitem pending-evevt-anchor'onMouseEnter={eightChange} onMouseLeave={eightChange} style={{backgroundColor:`${eightIsTouched ? "aliceblue": "#aacbde"}`}}>
                        <p className='item-tltle pending-evevt-value'>0</p>
                        <p className='item-desc'>待確認活動</p>
                      </a>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}