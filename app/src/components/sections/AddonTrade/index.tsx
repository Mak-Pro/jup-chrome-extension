"use client";
import { useState } from "react";
import Image from "next/image";
import { Button, TextDivider, Tooltip } from "@/components";
import styles from "./style.module.scss";
import { cssVariables } from "@/assets/styles/variables";

const buyOptions = [0.1, 0.5, 1, 5, 10, 50];
const sellOptions = [10, 25, 33, 50, 75, 100];

export const AddonTrade = () => {
  const [tab, setTab] = useState("buy");
  const [tabEdit, setTabEdit] = useState(false);
  const [shortcutEdit, setShortcutEdit] = useState(false);

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
              <div
                className={`${styles.trade__token_price_direction} ${styles.trade__token_price_direction_up}`}
              >
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
              {!tabEdit && (
                <Tooltip text="Edit Values">
                  <button
                    className={styles.trade__edit_btn}
                    onClick={() => setTabEdit(true)}
                  >
                    <Image
                      src="/icons/addon-edit-icon.svg"
                      width={18}
                      height={18}
                      alt="price edit"
                    />
                  </button>
                </Tooltip>
              )}
              {tabEdit && (
                <div className={styles.trade__edit_choice}>
                  <button onClick={() => setTabEdit(false)}>
                    <Image
                      src="/icons/addon-check-icon.svg"
                      width={18}
                      height={18}
                      alt="apply"
                    />
                  </button>
                  <button onClick={() => setTabEdit(false)}>
                    <Image
                      src="/icons/addon-close-icon.svg"
                      width={18}
                      height={18}
                      alt="cancel"
                    />
                  </button>
                </div>
              )}
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
              {tab === "buy" && (
                <div className={styles.trade__tabs__panel}>
                  <div className={styles.trade__options}>
                    {buyOptions.map((option) => (
                      <div key={option} className={styles.trade__option}>
                        {!tabEdit && (
                          <Button
                            variant="filled"
                            type="large"
                            color={cssVariables.green}
                            borderRadius={12}
                          >
                            {option} SOL
                          </Button>
                        )}
                        {tabEdit && (
                          <div className={styles.trade__option_edit}>
                            <input type="text" />
                            <span>SOL</span>
                            <i></i>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {tab === "sell" && (
                <div className={styles.trade__tabs__panel}>
                  <div className={styles.trade__options}>
                    {sellOptions.map((option) => (
                      <div key={option} className={styles.trade__option}>
                        {!tabEdit && (
                          <Button
                            variant="filled"
                            type="large"
                            color={cssVariables.red40}
                            borderRadius={12}
                          >
                            {option} %
                          </Button>
                        )}
                        {tabEdit && (
                          <div className={styles.trade__option_edit}>
                            <input type="text" />
                            <span>%</span>
                            <i></i>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <TextDivider text="or" />
          <div className={styles.trade__custom}>
            <div className={styles.trade__custom_value}>
              <input type="text" />
              <span>Total</span>
              <span>SOL</span>
              <i></i>
            </div>
            <Button
              variant="filled"
              type="large"
              color={tab === "buy" ? cssVariables.green : cssVariables.red40}
              borderRadius={12}
            >
              {tab === "buy" ? "Buy" : "Sell"} BONK for X SOL
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.trade__footer}>
        <div className={styles.trade__shortcuts}>
          <div className={styles.trade__shortcuts__header}>
            <h6>Shortcuts</h6>
            <div className={styles.trade__edit}>
              {!shortcutEdit && (
                <Tooltip text="Edit Price">
                  <button
                    className={styles.trade__edit_btn}
                    onClick={() => setShortcutEdit(true)}
                  >
                    <Image
                      src="/icons/addon-edit-icon.svg"
                      width={18}
                      height={18}
                      alt="price edit"
                    />
                  </button>
                </Tooltip>
              )}
              {shortcutEdit && (
                <div className={styles.trade__edit_choice}>
                  <button onClick={() => setShortcutEdit(false)}>
                    <Image
                      src="/icons/addon-check-icon.svg"
                      width={18}
                      height={18}
                      alt="apply"
                    />
                  </button>
                  <button onClick={() => setShortcutEdit(false)}>
                    <Image
                      src="/icons/addon-close-icon.svg"
                      width={18}
                      height={18}
                      alt="cancel"
                    />
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className={styles.trade__shortcuts__body}>
            <div className={styles.trade__shortcut}>
              <div
                className={`${styles.trade__shortcut_combination} ${
                  shortcutEdit ? styles.trade__shortcut_combination_edit : ""
                }`}
              >
                {!shortcutEdit && "Press"}
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
              to buy for {!shortcutEdit && `$${10}`}
              {shortcutEdit && (
                <div
                  className={`${styles.trade__shortcut_input} ${styles.trade__shortcut_input_inverted}`}
                >
                  <input type="text" />
                  <span>$</span>
                  <i></i>
                </div>
              )}
            </div>
            <div className={styles.trade__shortcut}>
              <div
                className={`${styles.trade__shortcut_combination} ${
                  shortcutEdit ? styles.trade__shortcut_combination_edit : ""
                }`}
              >
                {!shortcutEdit && "Press"}
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
                <div className={styles.trade__shortcut_combination_unit}>L</div>
              </div>
              to sell {!shortcutEdit && `${10}%`}
              {shortcutEdit && (
                <div className={styles.trade__shortcut_input}>
                  <input type="text" />
                  <span>%</span>
                  <i></i>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
