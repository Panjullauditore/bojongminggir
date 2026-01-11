import React from 'react';
import { motion } from 'framer-motion';
import { umkmData } from '../data/umkmData';
import { MapPin, Tag } from 'lucide-react';

const UMKMPage = () => {
    return (
        <div className="min-h-screen pt-24 pb-16 bg-slate-50 dark:bg-slate-900">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h1 className="mb-4 text-3xl font-bold text-emerald-800 dark:text-emerald-400 md:text-4xl">
                        Daftar Lokasi UMKM
                    </h1>
                    <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-300">
                        Temukan berbagai Usaha Mikro, Kecil, dan Menengah di Desa Bojong Minggir.
                        Dukung ekonomi lokal dengan berbelanja di warung tetangga.
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {umkmData.map((umkm, index) => (
                        <motion.div
                            key={umkm.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="overflow-hidden bg-white shadow-lg rounded-xl dark:bg-slate-800 hover:shadow-xl transition-shadow"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={umkm.image}
                                    alt={umkm.name}
                                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                                    <Tag className="w-3 h-3 mr-1" />
                                    {umkm.category}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="mb-2 text-xl font-bold text-slate-800 dark:text-white">
                                    {umkm.name}
                                </h3>
                                <p className="mb-4 text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                                    {umkm.description}
                                </p>

                                <div className="flex items-start mb-4 text-sm text-slate-500 dark:text-slate-400">
                                    <MapPin className="flex-shrink-0 w-4 h-4 mr-2 mt-0.5 text-emerald-600" />
                                    <span>{umkm.address}</span>
                                </div>

                                <a
                                    href={umkm.mapLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white transition-colors rounded-lg bg-emerald-600 hover:bg-emerald-700"
                                >
                                    Lihat di Peta
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UMKMPage;
