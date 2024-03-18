import { ReactNode } from "react";

export interface FormState {
    id: number;
    name: string;
    email: string;
    position: string;
    department: string;
    salary: number;
    startDate: string;
}

export interface ErrorState {
    id: string | null;
    name: string | null;
    email: string | null;
    position: string | null;
    department: string | null;
    salary: string | null;
    startDate: string | null;
}

export interface FormFieldParams {
    label: string;
    controlId: string;
    children: ReactNode;
}
