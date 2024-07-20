import React from 'react';
import { assets } from '../assets';
import PageFrame from '../components/common/PageFrame';

// connect api
const teams = [
    { img: assets.images.aboutUs, name: 'Nguyen Van A', role: 'Quan ly', info: 'Thich ca hat' },
    { img: assets.images.aboutUs, name: 'Nguyen Van A', role: 'Quan ly', info: 'Thich ca hat' },
    { img: assets.images.aboutUs, name: 'Nguyen Van A', role: 'Quan ly', info: 'Thich ca hat' },
    { img: assets.images.aboutUs, name: 'Nguyen Van A', role: 'Quan ly', info: 'Thich ca hat' },
    { img: assets.images.aboutUs, name: 'Nguyen Van A', role: 'Quan ly', info: 'Thich ca hat' },
    { img: assets.images.aboutUs, name: 'Nguyen Van A', role: 'Quan ly', info: 'Thich ca hat' },
];

function AboutUs() {
    return (
        <div>
            <PageFrame img={assets.images.aboutUs} name={'Về chúng tôi'}>
                <div>
                    <p className="py-5 text-[24px] text-[#2389C9]">Câu chuyện của chúng tôi</p>
                    <div className="flex justify-between gap-[60px]">
                        <div className="flex-1">
                            <p className="text-[#2389C9] font-black mb-4">_____</p>
                            <p>
                                Khách sạn "DTD hotel" khởi nguồn từ một ngôi nhà nhỏ ven biển vào năm 1985, do gia đình
                                ông bà Trần lập ra với mong muốn mang đến cho du khách một nơi nghỉ ngơi yên bình và ấm
                                cúng. Ban đầu, chỉ có vài phòng nghỉ và một nhà hàng nhỏ, nhưng với sự nỗ lực không
                                ngừng và lòng nhiệt huyết của gia đình, khách sạn đã nhanh chóng phát triển. Sau hơn ba
                                thập kỷ, "Golden Sunrise" đã trở thành một trong những điểm đến hàng đầu, nổi tiếng với
                                dịch vụ tuyệt vời và không gian thiên nhiên tuyệt đẹp.
                            </p>
                        </div>
                        <div className="flex-1">
                            <p className="text-[#2389C9] font-black mb-4">_____</p>
                            <p>
                                Tại "DTD hotel", chúng tôi luôn tin tưởng vào giá trị cốt lõi của sự chân thành, tận tâm
                                và chất lượng vượt trội. Mỗi thành viên trong đội ngũ đều cam kết mang đến cho khách
                                hàng những trải nghiệm đáng nhớ, không chỉ thông qua dịch vụ mà còn qua từng chi tiết
                                nhỏ trong thiết kế và phong cách phục vụ. Tầm nhìn của chúng tôi là trở thành biểu tượng
                                của lòng hiếu khách tại khu vực, nơi mỗi du khách đến đều cảm thấy như trở về nhà. Bằng
                                cách duy trì và phát triển những giá trị truyền thống, "Golden Sunrise" tiếp tục vươn
                                lên và khẳng định vị thế của mình trên bản đồ du lịch quốc tế.
                            </p>
                        </div>
                        <div className="flex-1">
                            <img
                                className="w-full h-full object-cover object-center"
                                src={assets.images.aboutUs}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <p className="py-5 text-[24px] text-[#2389C9] mt-20">Đội của chúng tôi</p>
                    <p className="text-[#2389C9] font-black mb-4">_____</p>
                    <div className="grid grid-cols-3 gap-8">
                        {teams.map((team, index) => (
                            <div key={index}>
                                <img className="rounded-md" src={team.img} alt={team.name} />
                                <p>{team.name}</p>
                                <p>{team.role}</p>
                                <p>{team.info}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </PageFrame>
        </div>
    );
}

export default AboutUs;
