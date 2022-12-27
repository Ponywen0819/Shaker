import React,{useState} from 'react'
import "./css/SMCbulletin.css"

function SMCbulletin () {
    return (
        <div className='aside-column'>
            <div className='card card-offset'>
                <div className='title-box'>
                    <div className='title'> 蝦皮公告</div>
                    <button type='button' className='bulletin-more'>
                        <span>更多</span>
                        <i className='more-icon'>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 16 16"  className='sv'>
                                <path d="M9.19 8l-3.97 3.97a.75.75 0 0 0 1.06 1.06l4.5-4.5a.75.75 0 0 0 0-1.06l-4.5 -4.5a.75.75 0 0 0-1.06 1.06L9.19 8z">
                                </path>
                            </svg>
                        </i> 
                    </button>
                </div>                    
                <div className='async-data-wrapper announcement-wrapper'>
                    <div className='status'>
                        <div className='status-box'> 
                            <div className='hot'>
                                <i className='hot-icon'>
                                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>
                                        <path d="M9.32 1.44a5.682 5.682 0 0 0 1.659 3.385A5.688 5.688 0 0 1 13.5 9.574c0 2.164-1.586 4.375-3.144 4.878l-.217.07c.085-.063.159-.134.217-.213.32-.434.524-1.048.612-1.844.172-1.546-.346-3.022-1.551-4.43-.057-.066-.162-.033-.156.048.106 1.334.099 2.18-.02 2.535-.247.737-.677 1.279-1.151 1.308-.747.047-1.292-.269-1.637-.948-.032-.062-.157-.057-.187.012-.32.743-.351 1.516-.095 2.318.131.41.359.781.682 1.11.233.238.637.469 1.144.55-.632.023-1.296-.078-2.085-.37C4.158 13.953 2.5 11.863 2.5 9.575c0-1.539.6-2.933 1.572-3.951.037-.039.095-.075.147-.069.063.008.119.067.122.121.09 1.31.498 2.33 1.351 3.17.097.095.167.032.11-.09-.341-.726-.378-1.43-.378-2.367 0-2.239 1.27-4.173 3.112-5.085.464-.269.752-.109.784.138z"></path>
                                    </svg>
                                </i>
                            </div>
                            <div className='context'>
                                <div className='item item-hover'>
                                    <p className='context-title'> test</p>
                                    <p className='descr'>
                                            test123121231321321
                                    </p>
                                </div>
                                <span className='time'>2022.12.24</span>
                            </div>
                        </div>
                        
                        <div className='status-box'> 
                            <div className='hot'>
                                <i className='hot-icon'>
                                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>
                                        <path d="M9.32 1.44a5.682 5.682 0 0 0 1.659 3.385A5.688 5.688 0 0 1 13.5 9.574c0 2.164-1.586 4.375-3.144 4.878l-.217.07c.085-.063.159-.134.217-.213.32-.434.524-1.048.612-1.844.172-1.546-.346-3.022-1.551-4.43-.057-.066-.162-.033-.156.048.106 1.334.099 2.18-.02 2.535-.247.737-.677 1.279-1.151 1.308-.747.047-1.292-.269-1.637-.948-.032-.062-.157-.057-.187.012-.32.743-.351 1.516-.095 2.318.131.41.359.781.682 1.11.233.238.637.469 1.144.55-.632.023-1.296-.078-2.085-.37C4.158 13.953 2.5 11.863 2.5 9.575c0-1.539.6-2.933 1.572-3.951.037-.039.095-.075.147-.069.063.008.119.067.122.121.09 1.31.498 2.33 1.351 3.17.097.095.167.032.11-.09-.341-.726-.378-1.43-.378-2.367 0-2.239 1.27-4.173 3.112-5.085.464-.269.752-.109.784.138z"></path>
                                    </svg>
                                </i>
                            </div>
                            <div className='context'>
                                <div className='item item-hover'>
                                    <p className='context-title'> test</p>
                                    <p className='descr'>
                                            test123121231321321
                                    </p>
                                </div>
                                <span className='time'>2022.12.24</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SMCbulletin
