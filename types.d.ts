interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  styles?: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  styles?: string;
  options: {
    value: string;
    label: string;
  }[];
}

interface FormType{
    fullname:string,
    email:string,
    phoneNumber:string,
    genre:string,
    lastBookRead: string
}

interface ModalProps {
    title?: string;
    children: React.ReactNode;
    toggleModal: () => void;
    isOpen: boolean;
  }