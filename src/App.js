import React from 'react'

export const App = () => {
  return (
    <div>
      <main>

        <div className="body-container">

          <div className="body-main-border">
            <div className="body-main">

              <div className="guide container-btns-top">
                <div className="btn-power blue invis"></div>
                <div className="mic-outer">
                  <div className="mic-inner"></div>
                </div>
                <div className="btn-power"></div>
              </div>

              <div className="guide container-btns-main guide">
                <div className="btn-main-outer">
                  <div className="btn-main-inner">
                  </div>
                </div>
              </div>

              <div className="guide container-btns-bottom">

                <div className="btns-col-left guide">
                  <div className="btn-basic"></div>
                  <div className="btn-basic"></div>
                  <div className="btn-basic"></div>
                </div>

                <div className="btns-col-right guide">
                  <div className="btn-basic"></div>
                  <div className="btn-volume"></div>
                </div>

              </div>

            </div>
          </div>

          <div className="btn-side"></div>

        </div>


      </main>
    </div>
  )
}
