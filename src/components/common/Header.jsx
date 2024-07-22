import React from 'react';
import { Link } from 'react-router-dom';

import { FaListUl, FaOpencart } from 'react-icons/fa';
import { Button, Dropdown } from 'antd';

import { configs } from '../../configs';
import { assets } from '../../assets';

const items = [
    {
        key: 0,
        label: (
            <div className="min-w-[200px] m-2">
                <Button className="w-full">
                    <Link className="w-full" to={configs.routes.bookingForm}>Đơn đặt chỗ</Link>
                </Button>
                <p className="my-2 cursor-default">Đăng nhập</p>
                <Button className="w-full">
                    <Link className="w-full" to={configs.routes.login}>Đăng nhập</Link>
                </Button>
                <Button type="primary" className="my-2 w-full">
                    <Link className="w-full" to={configs.routes.register}>Tạo tài khoản</Link>
                </Button>
            </div>
        ),
    },
];

const navbars = [
    { name: 'Trang chủ', link: configs.routes.home },
    { name: 'Phòng', link: configs.routes.rooms },
    { name: 'Tiện nghi', link: configs.routes.amenities },
    { name: 'Về chúng tôi', link: configs.routes.aboutUs },
    { name: 'Liên hệ', link: configs.routes.contact },
];

function Header() {
    return (
        <div className="w-full h-[60px] flex justify-between items-center px-10 border-b-2 bg-white z-50">
            {/* logo */}
            <Link to={configs.routes.home} className="h-[70%] ">
                <img src={assets.images.logo} alt="logo" className="h-full" />
            </Link>

            {/* Thanh điều hướng */}
            <div className="h-full flex items-center">
                {navbars.map((navbar, index) => (
                    <Link key={index}
                        className="h-full px-3 border-b-2 border-transparent flex items-center hover:border-gray-500 hover:text-[#2389C9] transition-all"
                        to={navbar.link}
                    >
                        {navbar.name}
                    </Link>
                ))}
            </div>

            {/* Tiện ích */}
            <div className="flex gap-6 text-[24px]">
                <Link to={configs.routes.cart}>
                    <FaOpencart className="cursor-pointer" />
                </Link>
                <Dropdown menu={{ items }} trigger={['click']} placement="bottomLeft" arrow>
                    <FaListUl className="cursor-pointer" />
                </Dropdown>
            </div>
        </div>
    );
}

export default Header;
