import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    
    //recebe o valor de contesto do component ChallengesContext.
    //useContext é utilizado para fazer a ponte entre varios components.
    const {activeChallenge, resetChallenge } = useContext(ChallengesContext)
    
    return(
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount}</header>

                    <main>
                        <img src="icons/body.svg" alt=""/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button 
                            type="button"
                            className={styles.challengeFailButton}
                            onClick={resetChallenge}
                        >
                            Falhei
                        </button>

                        <button
                            type="button"
                            className={styles.challengeSucceededButton}
                            >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
            <div className={styles.challengeNotActive}>
                <strong>Finalize um ciclo para receber um desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up"/>
                    Avance de level completando o desafio.
                </p>
            </div>
            )}
        </div>
    )
}