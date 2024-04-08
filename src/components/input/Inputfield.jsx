import React, { useState } from 'react';
import './inputfield.css';
import htmlIcon from '../../icon/html5-fill.png';
import cssIcon from '../../icon/css3-fill.png'
import jsIcon from '../../icon/javascript-fill.png';

const Inputfield = () => {

    const run = () => {
        var htmlcode = document.getElementById("html-code").value;
        var csscode = document.getElementById("css-code").value;
        var jscode = document.getElementById("js-code").value;
        var outputresult = document.getElementById("output");

        outputresult.contentDocument.body.innerHTML = htmlcode + "<style>" + csscode + "</style>";
        outputresult.contentWindow.eval(jscode);
    }



    return (
        <>
            <div className='wrapper'>
                <div className='inputfield_container'>
                    <div className='text-area-container'>
                        <label><img src={htmlIcon} alt='html' />HTML</label>
                        <textarea id="html-code" onKeyUp={run} spellCheck="false"></textarea>
                    </div>
                    <div className='text-area-container'>
                        <label ><img src={cssIcon} alt='css' />CSS</label>
                        <textarea id="css-code" onKeyUp={run} spellCheck="false"></textarea>
                    </div>
                    <div className='text-area-container'>
                        <label><img src={jsIcon} alt='js' />JS</label>
                        <textarea id="js-code" onKeyUp={run} spellCheck="false"></textarea>
                    </div>
                </div>
                <div className='output-container'>
                    <div className='output-heading'>
                        <div className='get_output_heading'>
                            Output
                        </div>
                        <div className='output_btn'>
                            <button >Save JS</button>
                        </div>

                    </div>
                    <div className='output-container-inner'>
                        <iframe id="output"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Inputfield;
