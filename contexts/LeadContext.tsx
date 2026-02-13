
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LeadContextType {
    isModalOpen: boolean;
    openModal: (url?: string) => void;
    closeModal: () => void;
    redirectUrl: string;
}

const LeadContext = createContext<LeadContextType | undefined>(undefined);

export const LeadProvider = ({ children }: { children: ReactNode }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [redirectUrl, setRedirectUrl] = useState('/obrigado');

    const openModal = (url?: string) => {
        setRedirectUrl(url || '/obrigado');
        setIsModalOpen(true);
    };
    const closeModal = () => setIsModalOpen(false);

    return (
        <LeadContext.Provider value={{ isModalOpen, openModal, closeModal, redirectUrl }}>
            {children}
        </LeadContext.Provider>
    );
};

export const useLeadModal = () => {
    const context = useContext(LeadContext);
    if (context === undefined) {
        throw new Error('useLeadModal must be used within a LeadProvider');
    }
    return context;
};
