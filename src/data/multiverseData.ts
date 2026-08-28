import type { MultiverseHypothesis } from '../types';

export const multiverseData: MultiverseHypothesis[] = [
  {
    id: 'eternal-inflation',
    name: 'Eternal Inflation & Bubble Universes (Level II Multiverse)',
    proponent: 'Alan Guth, Andrei Linde, Alexander Vilenkin',
    category: 'Eternal Inflation',
    status: 'Hypothesis / Speculative',
    coreConcept: 'Inflationary expansion of space never stops everywhere at once. Quantum fluctuations cause pockets of space to stop inflating and condense into isolated "bubble universes" with unique physical constants.',
    keyArguments: [
      'Natural extension of cosmic inflation theory explaining CMB smoothness',
      'Provides a theoretical framework for why physical constants take specific values'
    ],
    scientificCritiques: [
      'Currently lacks direct empirical falsifiability',
      'Predictions depend heavily on measure problems in mathematical probability'
    ],
    disclaimer: 'These ideas are active areas of theoretical discussion in high-energy physics and cosmology, and are not direct empirical observations of other universes.',
    sources: [{ name: 'Peer-Reviewed Literature', url: 'https://arxiv.org/abs/hep-th/0702178' }]
  },
  {
    id: 'many-worlds',
    name: 'Many-Worlds Interpretation of Quantum Mechanics (Level III)',
    proponent: 'Hugh Everett III (1957)',
    category: 'Many-Worlds Interpretation',
    status: 'Theoretical Model',
    coreConcept: 'Wavefunction collapse does not occur during quantum measurement. Instead, the universal quantum state continuously branches into non-communicating parallel timelines where every quantum outcome occurs.',
    keyArguments: [
      'Removes non-local wavefunction collapse postulates from quantum mechanics',
      'Fully deterministic mathematical evolution under the Schrödinger equation'
    ],
    scientificCritiques: [
      'Parallel quantum branches cannot communicate or transfer energy',
      'Deriving Born’s probability rule remains contested'
    ],
    disclaimer: 'This is an interpretation of quantum mathematics, not an observed secondary cosmos.',
    sources: [{ name: 'Peer-Reviewed Literature', url: 'https://plato.stanford.edu/entries/qm-manyworlds/' }]
  },
  {
    id: 'brane-cosmology',
    name: 'Brane Cosmology / Cyclic Ekpyrotic Universe',
    proponent: 'Paul Steinhardt, Neil Turok, Lisa Randall',
    category: 'Brane Cosmology',
    status: 'Hypothesis / Speculative',
    coreConcept: 'Our 3D observable universe is a 3-brane embedded within higher-dimensional bulk space (M-theory). Collisions between parallel branes trigger Big Bang events cyclicly.',
    keyArguments: [
      'Explains why gravity is dramatically weaker than electoweak forces (gravitons leak into extra dimensions)',
      'Offers alternative non-inflationary cosmological horizon solutions'
    ],
    scientificCritiques: [
      'Requires string theory and extra spatial dimensions which remain unverified by LHC experiments'
    ],
    disclaimer: 'These concepts are theoretical extensions of string theory and M-theory.',
    sources: [{ name: 'Peer-Reviewed Literature', url: 'https://arxiv.org/abs/hep-th/0103239' }]
  },
  {
    id: 'mathematical-universe',
    name: 'Mathematical Universe Hypothesis (Level IV Multiverse)',
    proponent: 'Max Tegmark',
    category: 'Mathematical Universe',
    status: 'Hypothesis / Speculative',
    coreConcept: 'Proposes that external physical reality is a mathematical structure. All mathematically consistent structures exist physically as distinct universes with different equations.',
    keyArguments: [
      'Pushes physical realism to its logical limit',
      'Eliminates fine-tuning questions by hypothesizing all mathematical ensembles exist'
    ],
    scientificCritiques: [
      'Philosophical hypothesis bordering on metaphysics rather than testable empirical physics'
    ],
    disclaimer: 'Purely theoretical philosophical hypothesis.',
    sources: [{ name: 'Peer-Reviewed Literature', url: 'https://arxiv.org/abs/0707.2593' }]
  }
];
