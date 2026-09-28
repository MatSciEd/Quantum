# Quantum

Interactive web modules on qubits, quantum computing, and quantum sensing, for three
audiences. Everything runs in the browser. Nothing to install.

**Live site:** https://matscied.github.io/Quantum/

## The pages

| Audience | Page | What it covers |
|---|---|---|
| High school | [From a Bit to a Qubit](docs/HS1_From_a_Bit_to_a_Qubit.html) | Switches, coins, the qubit as an arrow, why looking changes it, turning it, the hidden direction |
| High school | [Finding an Answer with Waves](docs/HS2_Finding_an_Answer_with_Waves.html) | Waves add and cancel, two roads to one detector, scores for every pattern, the four-box search |
| High school | [A Qubit as a Sensor](docs/HS3_A_Qubit_as_a_Sensor.html) | A field turns the arrow like a clock hand, the stopwatch experiment, counting beats randomness |
| Undergraduate | [How Many Bits Fit in a Qubit?](docs/How_Many_Bits_Fit_in_a_Qubit.html) | From binary to a dial to the continuum, the guessing game, Holevo, Helstrom, superdense coding |
| Undergraduate | [Why a Qubit Forgets](docs/Why_a_Qubit_Forgets.html) | Decoherence from nearby charges and magnets, fast vs slow noise, T1 and T2, the echo, sweet spots |
| Engineers | [Bits, Qubits, and Phase](docs/Bits_Qubits_and_Phase.html) | Phasors, polarization, gates as rotations, the Mach–Zehnder circuit, entanglement, Grover, Ramsey sensing |

The links above open the source on GitHub. To use the pages, visit the live site or open
the files in `docs/` in a browser.

Each page has live figures, answer-first quick checks, and (for the high-school pages)
teacher notes and try-at-home experiments. Every numerical claim was checked against a direct
calculation before it was written down.

## Notebook

`notebooks/Qubits_Gates_and_Sensing.ipynb` is the companion to *Bits, Qubits, and Phase*, in
the MatSciEd house style. It runs on numpy and matplotlib and falls back gracefully if
`matscied-tools` or `ipywidgets` are not installed.

## Layout

```
docs/          the web modules and index.html, served by GitHub Pages
notebooks/     Jupyter notebooks
```

## License

MIT. See `LICENSE`.
