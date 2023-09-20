export const createPassword = (name: string, surname: string, isStudent: boolean = false): string => isStudent ? `${name}-${surname}` : `${name}`;
export const getLogin = (name: string, surname?: string) => surname || name;

// export const getSkillsForHR = (name: string, ...skills: Array<string>)