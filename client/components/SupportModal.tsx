import { useState } from "react";
import { X } from "lucide-react";

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

export const SupportModal = ({
  isOpen,
  onClose,
  title,
  content,
}: SupportModalProps) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 pointer-events-none">
        <div
          className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-black/10 px-6 py-4 sm:px-8 sm:py-6 flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-bold text-black">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-black/5 rounded-lg transition-colors flex-shrink-0"
            >
              <X size={24} className="text-black" />
            </button>
          </div>

          {/* Content */}
          <div className="px-6 py-4 sm:px-8 sm:py-6 text-black/80 space-y-4">
            {content}
          </div>
        </div>
      </div>
    </>
  );
};
