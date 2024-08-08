import React, { useEffect, useState } from 'react';
import PageFrame from '../components/common/PageFrame';
import { configs } from '../configs';
import { assets } from '../assets';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import roomApi from '../features/apis/roomApi';

function Rooms() {
    const dispatch = useDispatch();
    const cartState = useSelector((state) => state.room);

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const roomsFromApi = await roomApi.getNonRepeatRoomType();
                console.log(roomsFromApi);
                setRooms(roomsFromApi);
            } catch (error) {
                console.error('Có lỗi xảy ra khi lấy dữ liệu phòng:', error);
            }
        };

        fetchRooms();
    }, []);

    return (
        <div>
            <PageFrame img={assets.images.rooms} name={'Phòng'}>
                <div className="grid grid-cols-2 gap-8">
                    {rooms.map((room, index) => (
                        <div key={index} className="h-[140px] flex gap-4">
                            <div className="flex-1 min-w-[220px] h-full rounded-lg overflow-hidden">
                                <img
                                    className="w-full h-full object-cover object-center"
                                    src={assets.images.rooms}
                                    alt='room'
                                />
                            </div>
                            <div className="flex-1 relative">
                                <p className="h-[40%] overflow-hidden text-[16px] font-semibold ">{room.type}</p>
                                <p className="overflow-hidden whitespace-nowrap text-[14px] text-gray-600">
                                    {room.status}
                                </p>
                                <p>{room.price} vnđ</p>
                                <Button className="absolute bottom-0">
                                    <Link to={configs.routes.bookingForm} state={room}>
                                        Đặt phòng ngay
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </PageFrame>
        </div>
    );
}

export default Rooms;
