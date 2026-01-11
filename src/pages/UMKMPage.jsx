import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { umkmData } from '../data/umkmData';
import { MapPin, Tag, Search, ChevronLeft, ChevronRight } from 'lucide-react';

const UMKMPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const filteredUmkm = umkmData.filter((umkm) => {
        const term = searchTerm.toLowerCase();
        return (
            umkm.name.toLowerCase().includes(term) ||
            umkm.description.toLowerCase().includes(term) ||
            umkm.category.toLowerCase().includes(term) ||
            umkm.address.toLowerCase().includes(term)
        );
    });

    // Pagination Logic
    const totalPages = Math.ceil(filteredUmkm.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredUmkm.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Reset to first page on search
    };

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
                    <p className="max-w-2xl mx-auto mb-8 text-slate-600 dark:text-slate-300">
                        Temukan berbagai Usaha Mikro, Kecil, dan Menengah di Desa Bojong Minggir.
                        Dukung ekonomi lokal dengan berbelanja di warung tetangga.
                    </p>

                    {/* Search Bar */}
                    <div className="relative max-w-md mx-auto">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Search className="w-5 h-5 text-slate-400" />
                        </div>
                        <input
                            type="text"
                            className="block w-full p-4 pl-10 text-sm text-slate-900 border border-slate-300 rounded-lg bg-white focus:ring-emerald-500 focus:border-emerald-500 dark:bg-slate-800 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
                            placeholder="Cari UMKM, kategori, atau alamat..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
                    {currentItems.length > 0 ? (
                        currentItems.map((umkm, index) => (
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
                        ))
                    ) : (
                        <div className="col-span-full text-center py-10">
                            <p className="text-slate-500 dark:text-slate-400 text-lg">
                                Tidak ada UMKM yang ditemukan dengan kata kunci "{searchTerm}".
                            </p>
                        </div>
                    )}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center space-x-2">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="p-2 rounded-lg border border-slate-300 bg-white text-slate-500 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-slate-800 dark:border-slate-600 dark:text-slate-400 dark:hover:bg-slate-700"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                            <button
                                key={number}
                                onClick={() => handlePageChange(number)}
                                className={`px-4 py-2 rounded-lg border ${currentPage === number
                                        ? 'bg-emerald-600 text-white border-emerald-600'
                                        : 'bg-white text-slate-500 border-slate-300 hover:bg-slate-100 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-400 dark:hover:bg-slate-700'
                                    }`}
                            >
                                {number}
                            </button>
                        ))}

                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="p-2 rounded-lg border border-slate-300 bg-white text-slate-500 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-slate-800 dark:border-slate-600 dark:text-slate-400 dark:hover:bg-slate-700"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UMKMPage;
