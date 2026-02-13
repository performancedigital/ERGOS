
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LeadContextType {
    isModalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

const LeadContext = createContext<LeadContextType | undefined>(undefined);

export const LeadProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <LeadContext.Provider value={{ isModalOpen, openModal, closeModal }}>
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
