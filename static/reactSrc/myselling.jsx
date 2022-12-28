const SellingPanel = () =>{
    return (
        <div className="page-container has-siderbar">
            <div className="page-content-wrapper">
                <div className="selling-root">
                    <div className="selling-container">
                        <div className="selling-container top-card-bar">
                            <div className="fixed-bar">
                                <div className="portal-panel">
                                    <div className="list-tabs">
                                        <div className="top-tab-flex main-content">
                                            <div className="panel-nav">
                                                <div className="tabs_nav-warp">
                                                    <div className="nav_options">

                                                        <div className="nav_option">
                                                            <div className="option-label">
                                                                <span>全部</span>
                                                            </div>
                                                        </div>

                                                        <div className="nav_option">
                                                            <div className="option-label">
                                                                <span>尚未付款</span>
                                                            </div>
                                                        </div>

                                                        <div className="nav_option">
                                                            <div className="option-label">
                                                                <span>待出貨</span>
                                                            </div>
                                                        </div>

                                                        <div className="nav_option">
                                                            <div className="option-label">
                                                                <span>運送中</span>
                                                            </div>
                                                        </div>

                                                        <div className="nav_option">
                                                            <div className="option-label">
                                                                <span>已完成</span>
                                                            </div>
                                                        </div>

                                                        <div className="nav_option">
                                                            <div className="option-label">
                                                                <span>不成立</span>
                                                            </div>
                                                        </div>

                                                        <div className="nav_option">
                                                            <div className="option-label">
                                                                <span>退款/退貨</span>
                                                            </div>
                                                        </div>

                                                        <div className="nav_option">
                                                            <div className="option-label">
                                                                <span>運送失敗</span>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-panel">
                            <div className="order-list">
                                <div className="padding-wrap">
                                    <div className="order-search">
                                        <div className="order-export">
                                            <div className="singal-picker-wrapper">
                                                <span className="date">訂單成立日期</span>
                                                <div className="date-selecter">
                                                    <div className="date-selecter__input">
                                                        
                                                    </div>
                                                </div>
                                            </div>
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

