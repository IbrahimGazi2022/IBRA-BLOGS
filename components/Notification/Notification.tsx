"use client"

import { useState } from 'react';
import { BellDot } from 'lucide-react';
import { Notifications } from "@/theme-config"

const Notification = () => {
    const [showNotifications, setShow] = useState(false);
    const toggle = () => setShow(!showNotifications);
    const close = () => setShow(false);
    const unreadCount = Notifications.length;

    return (
        <>
            {showNotifications && (
                <div
                    onClick={close}
                    className="fixed inset-0 bg-transparent z-40"
                />
            )}

            <div onClick={toggle} className="w-10 h-10 rounded-full flex items-center justify-center mr-4 cursor-pointer hover:bg-slate-100 relative z-50">
                <div className="relative">
                    <BellDot strokeWidth={2} size={25} color="#009245" />
                    {unreadCount > 0 && (
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                            {unreadCount}
                        </span>
                    )}
                </div>
                {showNotifications && (
                    <div className="absolute top-14 right-[-50px] w-96 bg-white shadow-lg rounded-lg p-4 z-50">
                        <h4 className="text-lg font-semibold mb-4">Notifications</h4>
                        {Notifications.map((n) => (
                            <div key={n.id} className="flex items-start gap-3 pb-3 mb-3">
                                <img src={n.imageUrl} alt="User" className="w-10 h-10 rounded-full object-cover" />
                                <div className="flex flex-col">
                                    <span className="font-semibold text-gray-800">{n.user}</span>
                                    <span className="text-sm text-gray-600">{n.message}</span>
                                    <span className="text-xs text-gray-400 mt-1">{n.createdAt}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

export default Notification;
