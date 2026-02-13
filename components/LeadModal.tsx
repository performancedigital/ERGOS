
import React, { useState } from 'react';
import { useLeadModal } from '../contexts/LeadContext'; // Import from 'contexts' folder
import { COLORS, GRADIENTS, WEBHOOK_URL } from '../constants';

const LeadModal: React.FC = () => {
    const { isModalOpen, closeModal, redirectUrl } = useLeadModal();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '', // Optional, maybe remove if not needed? User asked for Name, WhatsApp, Bill. I'll add Email just in case as hidden or optional. Actually let's stick to requested fields: Name, WhatsApp, Bill.
        whatsapp: '',
        billValue: ''
    });

    if (!isModalOpen) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // N8N Webhook URL - Imported from constants
        // const WEBHOOK_URL = 'https://n8n.webhook.url/replace-me';

        try {
            // Send data to webhook
            // Note: 'no-cors' mode might be needed if N8N doesn't handle CORS correctly, 
            // but 'no-cors' prevents reading response. usually N8N webhook returns 200 OK.
            // I'll try standard fetch first.
            const data = new FormData();
            data.append('name', formData.name);
            data.append('whatsapp', formData.whatsapp);
            data.append('billValue', formData.billValue);
            data.append('source', 'site_ergos');
            data.append('date', new Date().toISOString());

            await fetch(WEBHOOK_URL, {
                method: 'POST',
                body: data,
            });

            // Navigate to /obrigado
            // Navigate to redirectUrl (WhatsApp or /obrigado)
            window.location.href = redirectUrl;

        } catch (error) {
            console.error('Error submitting form:', error);
            // Even if error, maybe redirect? Or show error.
            // For lead gen, usually better to redirect to thank you page to not lose momentum, 
            // or at least show a fallback message.
            // I'll redirect for now as N8N might not return CORS headers 
            window.location.href = redirectUrl;
        } finally {
            setLoading(false);
            closeModal();
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={closeModal}
            ></div>

            {/* Modal Content */}
            <div
                className="relative bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300"
            >
                {/* Header */}
                <div
                    className="p-6 text-center text-white relative overflow-hidden"
                    style={{ background: GRADIENTS.primary }}
                >
                    {/* Decorative circles */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-xl"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full -ml-12 -mb-12 blur-xl"></div>

                    <h2 className="text-2xl font-black mb-2 relative z-10">Simule sua Economia</h2>
                    <p className="text-white/80 text-sm relative z-10">Preencha para receber o estudo gratuito.</p>

                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                    >
                        ✕
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Nome Completo</label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0c4acd] focus:ring-2 focus:ring-[#0c4acd]/20 outline-none transition-all placeholder:text-gray-400"
                            placeholder="Seu nome"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">WhatsApp</label>
                        <input
                            type="tel"
                            name="whatsapp"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0c4acd] focus:ring-2 focus:ring-[#0c4acd]/20 outline-none transition-all placeholder:text-gray-400"
                            placeholder="(DDD) 99999-9999"
                            value={formData.whatsapp}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Valor Médio da Conta de Luz</label>
                        <select
                            name="billValue"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0c4acd] focus:ring-2 focus:ring-[#0c4acd]/20 outline-none transition-all bg-white text-gray-700 appearance-none cursor-pointer"
                            value={formData.billValue}
                            onChange={handleChange}
                        >
                            <option value="" disabled>Selecione um valor</option>
                            <option value="R$ 300 - R$ 500">R$ 300 a R$ 500</option>
                            <option value="R$ 501 - R$ 1.000">R$ 501 a R$ 1.000</option>
                            <option value="R$ 1.001 - R$ 2.000">R$ 1.001 a R$ 2.000</option>
                            <option value="Acima de R$ 2.000">Acima de R$ 2.000</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 text-[#0c4acd] font-black rounded-xl text-lg hover:scale-[1.02] transition-transform shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        style={{ background: COLORS.secondary }}
                    >
                        {loading ? (
                            <>
                                <div className="w-5 h-5 border-2 border-[#0c4acd]/30 border-t-[#0c4acd] rounded-full animate-spin"></div>
                                Enviando...
                            </>
                        ) : 'RECEBER SIMULAÇÃO GRÁTIS'}
                    </button>

                    <p className="text-xs text-center text-gray-400 mt-4">
                        Seus dados estão seguros. Não enviamos spam.
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LeadModal;
