import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';

import { assets } from '../assets';
import { Button, Checkbox, Input } from 'antd';

// connect api
const apiRooms = [
    { name: 'Phong 1Phong 1Phong 1Phon1', img: assets.images.rooms, type: '1 giuong doi', price: '200000' },
    {
        name: 'Phong 2 Phong 1 Phong 1Phong 1 ',
        img: assets.images.rooms,
        type: '1 giuong doi & 1 giuong doi',
        price: '200000',
    },
    { name: 'Phong 3', img: assets.images.rooms, type: '1 giuong doi', price: '200000' },
    { name: 'Phong 4', img: assets.images.rooms, type: '1 giuong doi', price: '200000' },
    { name: 'Phong 5', img: assets.images.rooms, type: '1 giuong doi', price: '200000' },
    { name: 'Phong 6', img: assets.images.rooms, type: '1 giuong doi', price: '200000' },
    { name: 'Phong 7', img: assets.images.rooms, type: '1 giuong doi', price: '200000' },
    { name: 'Phong 8', img: assets.images.rooms, type: '1 giuong doi', price: '200000' },
];

function Cart() {
    return (
        <div className="w-[100vw] flex gap-8 bg-[#F4F4F4] px-[15%] pt-4 relative">
            <div className="w-[66.7%] h-full">
                <p className="text-[20px] font-medium p-2 bg-white">Giỏ hàng của bạn ({apiRooms.length})</p>
                {apiRooms.map((room, index) => (
                    <div className="flex justify-between my-5 border p-4 bg-white" key={index}>
                        <div className="flex gap-3">
                            <div className="w-[200px] h-[120px] rounded-md overflow-hidden">
                                <img
                                    className="w-full h-full object-cover object-center"
                                    src={room.img}
                                    alt={room.name}
                                />
                            </div>

                            <div className="relative">
                                <p className="h-[36%] text-[16px] font-semibold ">{room.name}</p>
                                <p className="text-[14px] text-gray-600">{room.type}</p>
                                <p>{room.price} vnđ</p>
                                <Checkbox className="absolute bottom-0" />
                            </div>
                        </div>
                        <RiDeleteBin6Line className="cursor-pointer" />
                    </div>
                ))}
            </div>
            <div className="w-[33.3%] max-h-[220px] p-4 bg-white sticky top-4">
                <p className='text-center text-[32px] font-medium mb-4'>Tổng tiền giỏ hàng</p>
                <div className="flex justify-between">
                    <p>Số lượng</p>
                    <p>1</p>
                </div>
                <div className="flex justify-between my-4">
                    <p>Thành tiền</p>
                    <p>2</p>
                </div>
                <Button className='w-full' type='primary'>Thanh toán</Button>
            </div>
        </div>
    );
}

export default Cart;
