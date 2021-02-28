import { create } from 'domain';
import { createContext, useState, ReactNode } from 'react';
import { NamedTupleMember } from 'typescript';
import challenges from '../../challenges.json';

export const ChallengesContext = createContext({} as ChallengesContextData)

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    activeChallenge: Challenge;
    levelUp: () => void;
    startNewChallenge: () => void;
}

interface ChallengesProviderProps {
    children: ReactNode;
}

export function ChallengeProvider({ children }: ChallengesProviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    const [activeChallenge, setActiveChllenge] = useState(null)

    function levelUp() {
        setLevel(level + 1);
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor( Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex];
        
        setActiveChllenge(challenge)
    }

    return (
        <ChallengesContext.Provider 
            value={{ 
                level, 
                currentExperience, 
                challengesCompleted,
                levelUp, 
                startNewChallenge,
                activeChallenge
            }}>
            {children}
        </ChallengesContext.Provider>
    )
}