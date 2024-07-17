import React from 'react';
import { Link } from 'react-router-dom';

import { FaListUl, FaOpencart } from 'react-icons/fa';
import { Button, Dropdown } from 'antd';

import logo from '../../assets/images/logo.png';
import { configs } from '../../configs';

const items = [
    {
        key: 0,
        label: (
            <div className="min-w-[200px] m-2">
                <Button className="w-full">
                  <Link>Đơn đặt chỗ</Link>
                </Button>
                <p className="my-2 cursor-default">Đăng nhập</p>
                <Button className="w-full">Đăng nhập</Button>
                <Button type="primary" className="my-2 w-full">
                    Tạo tài khoản
                </Button>
            </div>
        ),
    },
];

function Header() {
    return (
        <div className="w-full h-[60px] flex justify-between items-center px-10">
            {/* logo */}
            <Link to={configs.routes.home} className="h-full ">
                <img src={logo} alt="logo" className="h-full" />
            </Link>
            {/* Thanh điều hướng */}
            <div className="h-full flex items-center gap-6 ">
                <Link to={configs.routes.home}>Home</Link>
                <Link>Home</Link>
                <Link>Home</Link>
                <Link>Home</Link>
                <Link>Home</Link>
                <Link>Home</Link>
            </div>

            {/* Tiện ích */}
            <div className="flex gap-6 text-[24px]">
                <Link><FaOpencart className="cursor-pointer" /></Link>
                <Dropdown menu={{ items }} trigger={['click']} placement="bottomLeft" arrow>
                    <FaListUl className="cursor-pointer" />
                </Dropdown>
            </div>
        </div>
    );
}

export default Header;
