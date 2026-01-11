import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";

interface CertificateDialogProps {
  children: ReactNode;
  imageSrc: string;
  imageAlt: string;
}

const CertificateDialog = ({ children, imageSrc, imageAlt }: CertificateDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-auto p-2 sm:p-4">
        <img 
          src={imageSrc} 
          alt={imageAlt} 
          className="w-full h-auto rounded-lg"
          loading="lazy"
        />
      </DialogContent>
    </Dialog>
  );
};

export default CertificateDialog;
