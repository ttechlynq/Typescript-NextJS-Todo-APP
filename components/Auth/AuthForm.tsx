import React from 'react';

interface FormData {
    email: string;
    password: string;
}

interface AuthFormProps {
    onSubmit: (formData: FormData) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({onSubmit}) => {
    const [formData, setFormData] = React.useState<FormData>({
        email: '',
        password: '',
    });

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({...prevData, [name]: value}));
};

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
};

    return (
        <form onSubmit={handleSubmit}>
        <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange} />
        <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange} />
        <button type="submit">Submit</button>
        </form>
    );
};

export default AuthForm;