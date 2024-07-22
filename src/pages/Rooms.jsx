import React from 'react';
import PageFrame from '../components/common/PageFrame';
import { configs } from '../configs';
import { assets } from '../assets';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

// connect api
const apiRooms = [
    { name: 'Phong vip', img: assets.images.rooms, type: '1 giuong doi', price: '200000' },
    { name: 'Phong 2', img: assets.images.rooms, type: '1 giuong doi & 1 giuong doi', price: '200000' },
    { name: 'Phong 3', img: assets.images.rooms, type: '1 giuong doi', price: '200000' },
    { name: 'Phong 4', img: assets.images.rooms, type: '1 giuong doi', price: '200000' },
    { name: 'Phong 5', img: assets.images.rooms, type: '1 giuong doi', price: '200000' },
    { name: 'Phong 6', img: assets.images.rooms, type: '1 giuong doi', price: '200000' },
    { name: 'Phong 7', img: assets.images.rooms, type: '1 giuong doi', price: '200000' },
    { name: 'Phong 8', img: assets.images.rooms, type: '1 giuong doi', price: '200000' },
];

function Rooms() {
    return (
        <div>
            <PageFrame img={assets.images.rooms} name={'Phòng'}>
                <div className="grid grid-cols-2 gap-8">
                    {apiRooms.map((room, index) => (
                        <div key={index} className="h-[140px] flex gap-4">
                            <div className='flex-1 min-w-[220px] h-full rounded-lg overflow-hidden'> 
                                <img className='w-full h-full object-cover object-center' src={room.img} alt={room.name} />
                            </div>
                            <div className='flex-1 relative'>
                                <p className='h-[40%] overflow-hidden text-[16px] font-semibold '>{room.name}</p>
                                <p className='overflow-hidden whitespace-nowrap text-[14px] text-gray-600'>{room.type}</p>
                                <p>{room.price} vnđ</p>
                                <Button className='absolute bottom-0'><Link to={configs.routes.bookingForm} state={room}>Đặt phòng ngay</Link></Button>
                            </div>
                        </div>
                    ))}
                </div>
            </PageFrame>
        </div>
    );
}

export default Rooms;
