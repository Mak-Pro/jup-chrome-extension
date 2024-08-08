"use client";
import { useState } from "react";
import Image from "next/image";
import { Button, TextDivider } from "@/components";
import styles from "./style.module.scss";
import { cssVariables } from "@/assets/styles/variables";

export const AddonTrade = () => {
  const [tab, setTab] = useState("buy");

  return (
    <div className={styles.trade}>
      <div className={styles.trade__signals}>
        <div className={styles.trade__signals_close}>
          <Image
            src="/icons/addon-close-icon.svg"
            width={18}
            height={18}
            alt="close"
          />
        </div>
        <div className={styles.trade__signals_icon}>
          <Image
            src="/icons/addon-bell-icon.svg"
            width={24}
            height={24}
            alt="notification"
          />
        </div>
        <h5>No recent signals for buy/sell Bonk</h5>
        <Button
          variant="filled"
          type="medium"
          color={cssVariables.green}
          borderRadius={10}
        >
          <Image
            src="/icons/addon-telegram-icon.svg"
            width={21}
            height={20}
            alt="telegram"
          />
          Notify Me
        </Button>
      </div>
      <div className={styles.trade__header}>
        <div className={styles.trade__token}>
          <div className={styles.trade__token_top}>
            <div className={styles.trade__token_avatar}>
              <Image
                src="/images/addon-token-avatar-stub.png"
                width={58}
                height={58}
                alt="avatar"
              />
            </div>
            <div className={styles.trade__token_info}>
              <div className={styles.trade__token_title}>
                Bonk <span>Bonk</span>
              </div>
              <div className={styles.trade__token_address}>
                <button>
                  <Image
                    src="/icons/addon-copy-icon.svg"
                    width={18}
                    height={18}
                    alt="copy"
                  />
                </button>
                <span>DezXA ... pPB263</span>
                <Image
                  src="/icons/addon-verify-icon.svg"
                  width={18}
                  height={18}
                  alt="verify"
                />
              </div>
            </div>
            <div className={styles.trade__token_switcher}>
              <div className={styles.trade__token_switcher_state}>
                <Image
                  src="/icons/addon-moon-icon.svg"
                  width={18}
                  height={18}
                  alt="dark"
                />
              </div>
              <div className={styles.trade__token_switcher_state}>
                <Image
                  src="/icons/addon-sun-icon.svg"
                  width={18}
                  height={18}
                  alt="light"
                />
              </div>
            </div>
          </div>
          <div className={styles.trade__token_bottom}>
            <div className={styles.trade__token_price}>
              <h3>$0.0021</h3>
              <div className={styles.trade__token_price_direction}>
                <Image
                  src="/icons/addon-price-up-icon.svg"
                  width={16}
                  height={16}
                  alt="price direction"
                />
                63.11%
              </div>
            </div>
            <div className={styles.trade__token_stats}>
              <div>
                MCAP
                <span>$108.64B</span>
              </div>
              <div>
                Volume
                <span>1.43M</span>
              </div>
              <div>
                Liquidity
                <span>620k</span>
              </div>
              <div>
                New holders 24h
                <span>+3 214</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.trade__body}>
        <div className={styles.trade__actions}>
          <div className={styles.trade__tabs}>
            <div className={`${styles.trade__edit} ${styles.trade__edit_tabs}`}>
              <button className={styles.trade__edit_btn}>
                <Image
                  src="/icons/addon-edit-icon.svg"
                  width={18}
                  height={18}
                  alt="price edit"
                />
              </button>
              <div className={styles.trade__edit_choice}>
                <button>
                  <Image
                    src="/icons/addon-check-icon.svg"
                    width={18}
                    height={18}
                    alt="apply"
                  />
                </button>
                <button>
                  <Image
                    src="/icons/addon-close-icon.svg"
                    width={18}
                    height={18}
                    alt="cancel"
                  />
                </button>
              </div>
            </div>
            <div className={styles.trade__tabs__controls}>
              <div
                className={`${styles.trade__tabs__control} ${
                  tab === "buy" ? styles.trade__tabs__control_active : ""
                } ${styles.trade__tabs__control_buy}`}
                onClick={() => setTab("buy")}
              >
                Buy For
              </div>
              <div
                className={`${styles.trade__tabs__control} ${
                  tab === "sell" ? styles.trade__tabs__control_active : ""
                } ${styles.trade__tabs__control_sell}`}
                onClick={() => setTab("sell")}
              >
                Sell For
              </div>
            </div>
            <div className={styles.trade__tabs__panels}>
              <div className={styles.trade__tabs__panel}>
                <div className={styles.trade__options}>
                  <div className={styles.trade__option}>
                    <Button
                      variant="filled"
                      type="large"
                      color={cssVariables.green}
                      borderRadius={12}
                    >
                      0.1 SOL
                    </Button>
                    <div className={styles.trade__option_edit}>
                      <input type="text" value={0.1} />
                      SOL
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.trade__tabs__panel}></div>
            </div>
          </div>

          <TextDivider text="or" />
          <div className={styles.trade__custom}>
            <div className={styles.trade__custom_value}>
              Total
              <input type="text" value={0} />
              SOL
            </div>
            <Button
              variant="filled"
              type="large"
              color={cssVariables.green}
              borderRadius={12}
            >
              Buy BONK for X SOL
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.trade__footer}>
        <div className={styles.trade__shortcuts}>
          <div className={styles.trade__shortcuts__header}>
            <h6>Shortcuts</h6>
            <div className={styles.trade__edit}>
              <button className={styles.trade__edit_btn}>
                <Image
                  src="/icons/addon-edit-icon.svg"
                  width={18}
                  height={18}
                  alt="price edit"
                />
              </button>
              <div className={styles.trade__edit_choice}>
                <button>
                  <Image
                    src="/icons/addon-check-icon.svg"
                    width={18}
                    height={18}
                    alt="apply"
                  />
                </button>
                <button>
                  <Image
                    src="/icons/addon-close-icon.svg"
                    width={18}
                    height={18}
                    alt="cancel"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className={styles.trade__shortcuts__body}>
            <div className={styles.trade__shortcut}>
              <div className={styles.trade__shortcut_combination}>
                Press
                <div className={styles.trade__shortcut_combination_unit}>
                  <Image
                    src="/icons/addon-cmd-icon.svg"
                    width={16}
                    height={16}
                    alt="icon"
                  />
                  Cmd
                </div>
                <div className={styles.trade__shortcut_combination_unit}>
                  <Image
                    src="/icons/addon-shift-icon.svg"
                    width={16}
                    height={16}
                    alt="icon"
                  />
                  Shift
                </div>
                <div className={styles.trade__shortcut_combination_unit}>K</div>
              </div>
              to buy for
              <span>$10</span>
              <input type="text" value={10} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
