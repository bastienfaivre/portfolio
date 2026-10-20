---
title: "Optimized Bitcoin Accumulation Strategy"
date: 2026-02-08
updated: 2026-09-13
version: "1.2.0"
pdf: "https://bastienfaivre.com/files/bitcoin-guide.pdf"
---

<div class="callout callout-warning">

**Warning:** All methods presented in this guide are mainly available for Swiss citizens. Please refer to the [Q&A](#qa) section to check availability in your country.

</div>

<div class="callout callout-disclaimer">

**Disclaimer:** The methods presented in this guide reflect my personal experience and opinions. It assumes that the reader is already familiar with Bitcoin fundamentals, including public and private keys, wallets, and transaction mechanics; it is not an introduction to Bitcoin. The content is provided for informational purposes only and does not constitute financial, investment, legal, or tax advice.

This guide contains referral links or promotional codes. These apply exclusively to products or platforms that I personally use and appreciate. Their inclusion does not affect the recommendations made in this document.

I am not responsible for any losses, damages, or consequences resulting from the use of the information or methods described herein. You are solely responsible for your decisions and actions and must conduct your own research, independently verify information, and fully understand the associated risks. Bitcoin is a volatile and speculative asset, and you may lose part or all of your invested capital. Only invest what you can afford to lose.

If you have questions, identify errors or outdated information, or wish to contribute to improving this guide, please contact me at [contact@bastienfaivre.com](mailto:contact@bastienfaivre.com). Contributions are welcome and will be acknowledged in the [changelog](#appendix-b-changelog).

</div>

**Abstract —** We present here a practical guide for long-term Bitcoin accumulation using trusted Swiss platforms. Designed for investors who prioritize security, simplicity, and disciplined growth, this guide focuses on steadily increasing BTC holdings through [Dollar-Cost Averaging (DCA)](https://en.wikipedia.org/wiki/Dollar_cost_averaging), without market timing or trading strategies. Bitcoin is approached as a long-term store of value, comparable to gold.

The guide covers secure self-custody solutions and presents two proven investment workflows: a fully automated, hands-off setup, and a low-fee manual approach optimized to maximize BTC received. Each workflow is explained step by step, enabling readers to build a secure, efficient, and sustainable Bitcoin accumulation strategy with confidence.

<figure>
  <img src="/images/guides/bitcoin-strategy.svg" alt="Diagram: from the bank, CHF 100 per month goes to Relai and the remaining CHF X−100 goes through ZCHF and MtPelerin; both routes deliver BTC to your own Bitcoin wallet." loading="lazy" />
  <figcaption>The combined accumulation strategy at a glance.</figcaption>
</figure>

## Storage

As stated in the abstract, the primary requirement for Bitcoin storage is **security**. Since this guide targets long-term accumulation, ease of access and transaction frequency are secondary considerations. In practice, transactions will occur rarely, typically only when liquidating part or all of the holdings.

### Custodial wallets

Custodial solutions, such as exchanges ([Coinbase](https://www.coinbase.com/), [Binance](https://www.binance.com/en), etc.) or brokers that retain control of the private keys, are excluded. As commonly stated: **not your keys, not your coins**. Full and exclusive control over the private keys via a non-custodial wallet is a strict requirement.

### Hot wallets

Although hot wallets provide full ownership of the private keys, they store them on devices that are regularly connected to the internet (e.g. [MetaMask](https://metamask.io/)). This constant connectivity exposes them to malware, phishing attacks, and software vulnerabilities. Given that fast or frequent access to funds is unnecessary in a long-term investment strategy, hot wallets are not considered an appropriate storage solution.

### Cold wallets

The following storage solutions meet the security requirements outlined in this guide. They ensure full control over private keys while significantly limiting exposure to online threats.

#### Hardware wallets

Hardware wallets are dedicated physical devices that keep private keys offline and sign transactions securely when connected to a computer or mobile device. Widely used manufacturers include [Ledger](https://www.ledger.com/), [Trezor](https://trezor.io/), and [BitBox](https://bitbox.swiss/). These devices offer a strong balance between security, reliability, and usability.

#### Air-gapped wallets

[Air-gapped wallets](https://airgap.it/offline-device/) rely on devices that have never been connected to the internet. Private keys remain fully isolated, and transactions are signed offline before being transferred via non-network methods such as QR codes. While offering excellent security, these setups require higher technical proficiency and operational discipline.

### Multi-signature wallets

Multi-signature wallets combine several wallets into a single security scheme. Transactions follow an *m-of-n* model, requiring signatures from *m* distinct keys out of *n* defined keys. This approach provides robust protection against single points of failure and is commonly adopted by institutions and high-net-worth individuals.

At this stage, the reader should have selected a storage solution aligned with their security requirements and technical comfort. For a discussion of quantum computing risks and their implications for Bitcoin storage, refer to [Appendix A](#appendix-a-quantum-computing-considerations).

<div class="callout callout-note">

**Author's note:** A hardware wallet is generally the most practical choice. *Ledger* devices offer a cost-effective entry point, while *BitBox*, a Swiss-made, fully open-source device, is preferable when budget permits. Referral links and promotional codes for these solutions are provided in [Support my work](#support-my-work).

</div>

## Buy

Independent of the chosen storage solution, the investor obtains a Bitcoin address to which the purchased bitcoins will be transferred. Each acquisition workflow consists of two distinct phases: (i) the purchase and (ii) the transfer to self-custody. The two primary variables considered in this section are the level of automation and the total fees incurred across both phases.

Credit cards and similar payment methods are excluded, as they typically incur prohibitively high fees (approximately 2–3%). Consequently, all workflows presented rely exclusively on bank transfers. All solutions are based on Swiss-regulated platforms.

<div class="callout callout-warning">

**Warning:** In October 2025, Relai [migrated European customers to a French entity (Relai EU)](https://support.relai.app/en/articles/425363-relai-migration-relai-ag-switzerland-to-relai-eu-france). Swiss residents remain served by Relai AG.

</div>

### Fully automated accumulation with Relai

[Relai](https://relai.app/) provides an *auto-invest* feature that allows the investor to specify a custom Bitcoin address for direct delivery of purchased bitcoins. Once configured, a standing bank order is created to a designated Relai IBAN, resulting in a fully automated investment process. Investments can be scheduled weekly or monthly, implementing a DCA approach.

Relai [charges](https://relai.app/pricing-policy/) a 1% purchase fee, which is reduced to 0.9% when using a referral code (see [Support my work](#support-my-work)). For investments of up to 100 CHF per month (1,200 CHF per year), the purchase fee is waived (monthly schedule only). As a result, the total fee for a yearly investment of *X* > 1,200 CHF amounts to:

<div class="formula">fee = <span class="frac"><span><i>X</i> − 1,200</span><span><i>X</i></span></span> × 0.9%</div>

For simplicity, this fee is approximated with the following notation: < 0.9%.

Note that the on-chain Bitcoin network fees for the transfer to self-custody are covered by Relai.

The main limitations of this approach are the requirement to complete a [KYC](https://en.wikipedia.org/wiki/Know_your_customer), the acceptance of biometric passports only, and a [minimum of 50 CHF or EUR per transaction](https://relai.app/pricing-policy-ch/).

### Fee-optimized accumulation with MtPelerin

[MtPelerin](https://www.mtpelerin.com/) applies a [sliding fee schedule](https://www.mtpelerin.com/pricing) based on yearly transaction volume (resetting on January 1st).

However, an exception applies to the [ZCHF](https://www.frankencoin.com/) token (Swiss franc stablecoin), which can be purchased at a 1:1 ratio at no cost. This workflow leverages this property by first acquiring ZCHF, then converting it to Bitcoin, and finally transferring the Bitcoin to a self-custody address.

The conversion and transfer occur in a single step, as the platform allows the destination Bitcoin address to be specified at the time of the swap. This operation is free for the first 500 CHF per year and incurs a 0.5% fee thereafter. As a result, the total fee for a yearly investment of *X* > 500 CHF amounts to:

<div class="formula">fee = <span class="frac"><span><i>X</i> − 500</span><span><i>X</i></span></span> × 0.5%</div>

For simplicity, this fee is approximated with the following notation: < 0.5%.

MtPelerin allows a trading volume of 999 CHF over a 30-day period [without identity verification](https://developers.mtpelerin.com/service-information/identity-verification). Account creation requires only an email address or a mobile phone number.

The primary drawback of this approach is the lack of full automation. Despite the ZCHF purchase being automatable[^automatable], the subsequent swap must be initiated manually. In addition, bank transfers typically require one business day to settle, resulting in a two-day process for each investment cycle. This workflow also requires control over the private key of the intermediary wallet used to receive ZCHF[^intermediary].

One could even go further by using [MtPelerin MPS tokens](https://www.mtpelerin.com/shareholders). We don't discuss it here.

### Combined accumulation strategy

The fee-minimizing strategy combines the two workflows presented above. Relai is used for the first 1,200 CHF invested per year, benefiting from a 0% purchase fee, while MtPelerin is employed for any additional amount (which comprises a 500 CHF investment at 0%).

Assuming a yearly investment of *X* > 1,700 CHF, the effective fee over the full investment is given by:

<div class="formula">fee = <span class="frac"><span><i>X</i> − 1,700</span><span><i>X</i></span></span> × 0.5%</div>

For simplicity, this fee is approximated with the following notation: ≪ 0.5%.

### Comparison

<div class="table-wrap">
<table>
  <caption>Summary comparison between all strategies</caption>
  <thead>
    <tr><th></th><th>Relai</th><th>MtPelerin</th><th>Combined</th></tr>
  </thead>
  <tbody>
    <tr><td>Fully automated</td><td class="good">yes</td><td class="bad">no</td><td class="bad">no</td></tr>
    <tr><td>Purchase fee (≤100 CHF/month)</td><td class="good">0%</td><td class="bad">&lt;0.5%</td><td>-</td></tr>
    <tr><td>Purchase fee (&gt;100 CHF/month)</td><td class="bad">&lt;0.9%</td><td class="mid">&lt;0.5%</td><td class="good">≪0.5%</td></tr>
    <tr><td>Identity verification</td><td class="bad">yes</td><td class="good">no</td><td class="bad">yes</td></tr>
    <tr><td>Trust intermediate blockchain</td><td class="good">no</td><td class="bad">yes</td><td class="bad">yes</td></tr>
  </tbody>
</table>
</div>

<div class="callout callout-note">

**Author's note:** The combined strategy is definitely the best choice for any yearly investment > 1,200 CHF. For a smaller investment, Relai is the zero-fee solution.

</div>

## Sell

Selling your Bitcoins is independent of the method used to purchase them. If you followed the recommendation to store your Bitcoins in a cold wallet, they are not tied to any exchange or platform[^untied]. The underlying principles, therefore, remain the same: the objective is to minimize total fees.

In all cases, you must first pay the Bitcoin network fee to transfer the funds to the selling platform, which will then remit the equivalent amount in fiat currency. This network fee is currently [only a few dollars, or even less](https://ycharts.com/indicators/bitcoin_average_transaction_fee). Once the transfer is completed, platform selling fees apply and are identical to purchase fees: 0.9% for Relai and 0.5% for MtPelerin when using the ZCHF swap method in reverse.

<div class="callout callout-note">

**Author's note:** Since selling typically occurs only once or a few times, completing the entire process with MtPelerin is the most cost-efficient option to maximize the final cash amount received.

</div>

## Setup

### Relai

Relai provides clear and comprehensive documentation.

1. **Register** on the [platform](https://support.relai.app/en/articles/214249-how-to-sign-up-to-relai). This step includes identity verification.
2. **Set up** a [recurrent investment](https://support.relai.app/en/articles/194343-how-to-create-an-auto-invest-plan). For the referral code, refer to [Support my work](#support-my-work).
3. **Congratulations**, your investment process is fully automated!

### MtPelerin

The platform is intuitive to use.

#### One-time setup

1. **Register** on the [platform](https://mtpelerin.com/join?rfr=3tBwjA5p). This link is a referral; see [Support my work](#support-my-work) for details.
2. **Set up** an intermediate wallet to receive ZCHF tokens. The available blockchains are [Base](https://www.base.org/), [Gnosis](https://www.gnosis.io/), and [Ethereum](https://ethereum.org/). The last one should not be considered, as the network fees are much higher than those of the other two chains. Moreover, MtPelerin charges $1 for sending tokens other than ETH to your wallet (see the [pricing](https://www.mtpelerin.com/pricing)).

<div class="callout callout-note">

**Author's note:** *Base* (an Ethereum Layer-2) is more actively used than *Gnosis* (an independent chain) and is generally considered the more stable choice for the intermediate blockchain.

</div>

<div class="callout callout-warning">

**Warning:** If you use the *Bitcoin-only* edition of the *BitBox* wallet, you need to use another wallet as the intermediary. Moreover, for the *Multi* edition of the *BitBox* wallet, you need to use the [Rabby](https://support.bitbox.swiss/en_US/Rabby-Wallet/connect-bitbox-to-rabby-wallet) browser extension to sign transactions on *Base*, since the standard *BitBox* app does not support it yet.

</div>

At this stage, the setup is complete, and you are ready to initiate your first investment.

#### First purchase

1. **Automate** the purchase of ZCHF tokens. For that, simply initiate a normal [buy setup](https://app.mtpelerin.com/). The bank transfer reference received is [fixed for a given fiat currency, cryptocurrency, and receiving address](https://www.mtpelerin.com/support#:~:text=Recurring%20buys%20/%20standing%20orders%20/%20DCA). Therefore, a recurring payment can be set with this reference. [Personal MtPelerin IBAN](https://www.mtpelerin.com/blog/personal-crypto-iban) can also be used, but requires identity verification.

   For both approaches, select the same currency as your bank account to avoid unnecessary bank conversion fees. For the blockchain, choose either *Base* or *Gnosis* (consistent with the second step of the [one-time setup](#one-time-setup)). The selected cryptocurrency must be ZCHF.

#### For each purchase

1. **Swap** ZCHF tokens for Bitcoins on the [app](https://app.mtpelerin.com/). Carefully select the correct blockchains and tokens, and always double-check the destination Bitcoin address. The network fees incurred when signing the transfer transaction are [negligible](https://tokenterminal.com/explorer/projects/base/metrics/transaction-fee-average).
2. **Congratulations**, you have received your Bitcoins!

## Q&A

### Are the platforms available in my country?

Relai is designed for [Switzerland and European Union countries](https://support.relai.app/en/articles/194248-is-relai-available-in-my-country).

MtPelerin has a list of [unsupported countries](https://developers.mtpelerin.com/service-information/supported-countries). Moreover, note that the website also shows a notice banner stating *"Mt Pelerin is a Switzerland-based financial intermediary. It is not authorised or regulated by the UK Financial Conduct Authority (FCA) and is not authorised as a crypto-asset service provider under Regulation (EU) 2023/1114 (MiCA)."*

## Support my work

Here is the list of all referral or promo codes you can use. As stated in the disclaimer, I am only referring to products or platforms **I use for my personal investments and that I particularly appreciate!** I am also transparent about what I earn when you use them.

### Wallets

- **[BitBox](https://shop.bitbox.swiss/?ref=bastienfaivre)**: I get a 12% commission. Also, try using the code **FRIEND24** at checkout for a 5% discount.
- **[Ledger](https://shop.ledger.com/pages/referral-program?referral_code=5Z5FGH57MCKQR)**: we both get [up to $20 of Bitcoins](https://refer-a-friend.ledger.com/referral-ll).

### Platforms

- **Relai**: use the code **REL67002**. I get 10% of your fees.
- **[MtPelerin](https://mtpelerin.com/join?rfr=3tBwjA5p)**: I get 25% of your fees.

Alternatively, you can also help fuel my brain!

<p><a class="coffee" href="https://buymeacoffee.com/bastienfaivre" target="_blank" rel="noopener noreferrer">☕ Buy me a coffee</a></p>

## Appendix A: Quantum computing considerations

Quantum computing poses a long-term threat to Bitcoin's cryptographic foundations. While no quantum computer currently exists that can break Bitcoin's security, understanding the risks is prudent for long-term investors.

### Current state of quantum technology

Quantum computers leverage quantum mechanics to perform certain calculations exponentially faster than classical computers. The primary concern for cryptography is [Shor's algorithm](https://en.wikipedia.org/wiki/Shor%27s_algorithm), which can efficiently solve the discrete logarithm problem underlying elliptic curve cryptography (ECC). Bitcoin's digital signatures rely on ECC via the [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm) and [Schnorr](https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki) algorithms.

<div class="callout callout-warning">

**Warning:** Quantum hardware is described in two distinct units: *physical qubits* (raw, noisy) and *logical qubits* (error-corrected, each encoded across several to several hundred physical qubits depending on the error-correcting code). Resource estimates for breaking Bitcoin's cryptography are specified in logical qubits; hardware announcements typically refer to physical qubits. Confusing the two leads to wildly different conclusions about the timeline.

</div>

As of September 2026, the most advanced quantum computers operate with [around 1,000–6,000 physical qubits](https://postquantum.com/post-quantum/crqc-scorecard-how-close/), while demonstrated logical qubit counts remain in the single-to-low-double digits. Breaking Bitcoin's 256-bit elliptic curve cryptography would require an estimated 1,200–1,450 logical qubits, executable on roughly 500,000 physical qubits under [realistic error-correction overhead](https://arxiv.org/pdf/2603.28846), a threshold [unlikely to be reached before 2027–2033](https://reports.tiger-research.com/p/quantum-pqc-eng). However, the rapid pace of advancement warrants attention.

### Bitcoin's quantum vulnerability

Bitcoin's vulnerability depends on whether a user's public key has been exposed on the blockchain:

- **Public key hash (unexposed)**: Modern address types such as P2PKH and P2WPKH ([SegWit](https://en.wikipedia.org/wiki/SegWit)) store only a *hash* of the public key on-chain. The actual public key remains hidden until the owner spends from that address. A quantum attacker would need to break both the hash function and the elliptic curve cryptography, a significantly harder task.
- **Public key exposed**: Once a transaction is broadcast, the public key is revealed. If funds remain at that address (due to address reuse), they become vulnerable to quantum key recovery. Additionally, [Taproot](https://bitcoinops.org/en/topics/taproot/) (P2TR) addresses expose the public key immediately upon receipt, rather than only upon spending.

#### Best practices

Two practices significantly reduce quantum exposure:

1. **Use SegWit addresses**: Addresses starting with `bc1q` (P2WPKH) hash your public key, keeping it hidden until you spend. This provides an additional layer of protection compared to Taproot (`bc1p`) addresses.
2. **Never reuse addresses**: Generate a new receiving address for each transaction. Once you spend from an address, your public key is permanently exposed on-chain. Any subsequent deposits to that address are at higher risk in a post-quantum scenario.

### Post-quantum cryptography in Bitcoin

As of May 2026, Bitcoin's mainnet does not currently support post-quantum cryptography (PQC) signatures, but progress has been made. **[BIP-360](https://bip360.org/)** was [merged into the official Bitcoin BIPs repository](https://github.com/bitcoin/bips/pull/1670) on February 11th 2026. It defines a new output type, **Pay-to-Merkle-Root** (**P2MR**), with addresses prefixed `bc1z`, that strips the keypath spend from Taproot so the [public key is never exposed on-chain](https://github.com/bitcoin/bips/blob/master/bip-0360.mediawiki). P2MR does not introduce post-quantum signatures itself; algorithms like [ML-DSA (Dilithium)](https://pq-crystals.org/dilithium/) and [SLH-DSA (SPHINCS+)](https://sphincs.org/), both [standardized by NIST](https://csrc.nist.gov/projects/post-quantum-cryptography), are being researched as future tapscript opcodes in follow-on BIPs.

A complementary proposal, **[BIP-361](https://github.com/bitcoin/bips/blob/master/bip-0361.mediawiki)** (*Post Quantum Migration and Legacy Signature Sunset*), outlines a multi-phase soft fork that would eventually freeze coins remaining in legacy quantum-vulnerable addresses ([currently around 6.5–6.7 million BTC](https://www.coindesk.com/tech/2026/04/04/bitcoin-s-usd1-3-trillion-security-race-key-initiatives-aimed-at-quantum-proofing-the-world-s-largest-blockchain)). It would phase out ECDSA and Schnorr signatures over time. Long-term holders should track its progress closely.

Note that publication in the BIP repository does not equal network activation: neither BIP has been activated.

It is important to distinguish between *wallet security* and *on-chain security*:

- **Wallet security**: Some hardware wallets (e.g., *[Trezor Safe 7](https://trezor.io/trezor-safe-7)*) now incorporate post-quantum cryptographic algorithms to protect [firmware/bootloader signature verification and device authenticity certificates](https://trezor.io/guides/trezor-devices/trezor-safe-7/going-quantum). This does not affect on-chain transactions or seed storage, but adds defense-in-depth for the device supply chain.
- **On-chain security**: The signatures used in Bitcoin transactions remain based on classical cryptography (ECDSA/Schnorr). Upgrading this requires network-wide consensus via a soft fork, a process that could take 5–10 years to coordinate and implement.

<div class="callout callout-note">

**Author's note:** For long-term investors, the practical recommendation is straightforward: use SegWit (`bc1q`) addresses and never reuse them. This ensures your public key remains hidden until you decide to spend.

Regarding hardware wallets with PQC features, while forward-thinking, they are not yet essential. If budget is a constraint, a standard hardware wallet (e.g., *Ledger Nano* series) provides excellent security today. You can always upgrade to a PQC-capable device later. The critical protection (keeping your public key unexposed) is achieved through address hygiene, not hardware features.

</div>

## Appendix B: Changelog

- **v1.2.0** (2026-09-13) — *[Bastien Faivre](https://bastienfaivre.com)*:
  - Added the minimum of 50 CHF or EUR per transaction to the limitations of the Relai workflow in [Fully automated accumulation with Relai](#fully-automated-accumulation-with-relai).
  - Updated [Fee-optimized accumulation with MtPelerin](#fee-optimized-accumulation-with-mtpelerin) with the current MtPelerin identity verification threshold (999 CHF over a 30-day period), replacing the previous volume limits.
  - Added a note in [Fee-optimized accumulation with MtPelerin](#fee-optimized-accumulation-with-mtpelerin) on MtPelerin MPS tokens as a possible further fee optimization.
  - Expanded [Are the platforms available in my country?](#are-the-platforms-available-in-my-country) with MtPelerin's regulatory notice regarding the UK Financial Conduct Authority (FCA) and Regulation (EU) 2023/1114 (MiCA).
  - Fixed typos and minor wording inconsistencies.
- **v1.1.0** (2026-05-03) — *[Bastien Faivre](https://bastienfaivre.com)*:
  - Expanded [One-time setup](#one-time-setup) on signing Base transactions with BitBox via Rabby browser extension; clarified WalletConnect limitations in BitBoxApp.
  - Expanded [Current state of quantum technology](#current-state-of-quantum-technology) with current quantum hardware figures and 2026 logical/physical qubit resource estimates.
  - Expanded [Post-quantum cryptography in Bitcoin](#post-quantum-cryptography-in-bitcoin) to cover BIP-360 (P2MR, `bc1z` addresses) and BIP-361 (Post Quantum Migration and Legacy Signature Sunset). The scope of Trezor Safe 7 post-quantum protections (bootloader and device authenticity, not seed storage) is also clarified.
  - Introduced the term *Dollar-Cost Averaging (DCA)* to explicitly name the underlying accumulation strategy.
  - Fixed typos and minor wording inconsistencies.
- **v1.0.0** (2026-02-08) — *[Bastien Faivre](https://bastienfaivre.com)*:
  - First version.
  - Proofread by *[Melvin Petracca](https://www.linkedin.com/in/melvinpetracca/)*.

[^automatable]: Via unique bank transfer references or MtPelerin's IBAN feature, which requires identity verification.

[^intermediary]: Which may be MtPelerin's built-in wallet or any self-custody solution described in [Storage](#storage).

[^untied]: Even if you store them via Relai or MtPelerin, they remain untied to the platform, as both are non-custodial solutions.
