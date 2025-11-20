import { Calendar, CheckCircle, Hash } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useState } from 'react';

export function EventHistory() {
  const [code, setCode] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmitCode = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    setCode('');
  };

  return (
    <div className="p-4 space-y-4">
      <div>
        <h2 className="text-gray-900 mb-1">イベント参加履歴</h2>
        <p className="text-gray-600 text-sm">参加したイベントと取得単位を確認できます</p>
      </div>

      {/* イベント参加コード入力 */}
      <Card className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
        <div className="flex items-start gap-3 mb-3">
          <div className="bg-green-600 rounded-full p-2">
            <Hash className="size-4 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-gray-900 mb-1">イベント参加コード入力</h3>
            <p className="text-gray-700 text-sm">イベント会場で案内されたコードを入力してください</p>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Input
            placeholder="例: ABC123"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="flex-1"
          />
          <Button onClick={handleSubmitCode} className="bg-green-600 hover:bg-green-700">
            送信
          </Button>
        </div>
        
        {showSuccess && (
          <div className="mt-3 p-3 bg-green-100 border border-green-300 rounded-lg flex items-center gap-2">
            <CheckCircle className="size-5 text-green-600" />
            <p className="text-green-900 text-sm">参加を記録しました！単位が付与されました。</p>
          </div>
        )}
      </Card>

      {/* 累計単位数 */}
      <div className="grid grid-cols-2 gap-3">
        <Card className="p-4 text-center">
          <p className="text-gray-600 text-sm mb-1">総取得単位</p>
          <p className="text-gray-900 text-3xl">46</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-gray-600 text-sm mb-1">今年度取得</p>
          <p className="text-gray-900 text-3xl">12</p>
        </Card>
      </div>

      {/* カテゴリー別累計 */}
      <Card className="p-4">
        <h3 className="text-gray-900 mb-3">カテゴリー別累計単位</h3>
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <Badge className="bg-blue-600 mb-2">A</Badge>
            <p className="text-gray-900">15</p>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded-lg">
            <Badge className="bg-purple-600 mb-2">B</Badge>
            <p className="text-gray-900">18</p>
          </div>
          <div className="text-center p-3 bg-orange-50 rounded-lg">
            <Badge className="bg-orange-600 mb-2">C</Badge>
            <p className="text-gray-900">13</p>
          </div>
        </div>
      </Card>

      {/* 参加履歴 */}
      <div>
        <h3 className="text-gray-900 mb-3">参加履歴</h3>
        <div className="space-y-3">
          <Card className="p-4">
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 rounded-lg p-2">
                <Calendar className="size-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <p className="text-gray-900">実践ワークショップ</p>
                    <p className="text-gray-600 text-sm">2025年11月15日</p>
                  </div>
                  <Badge className="bg-blue-600">A</Badge>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-gray-700 text-sm">取得単位: 5単位</p>
                  <CheckCircle className="size-5 text-green-600" />
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-start gap-3">
              <div className="bg-purple-100 rounded-lg p-2">
                <Calendar className="size-5 text-purple-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <p className="text-gray-900">専門研修プログラム</p>
                    <p className="text-gray-600 text-sm">2025年10月20日</p>
                  </div>
                  <Badge className="bg-purple-600">B</Badge>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-gray-700 text-sm">取得単位: 3単位</p>
                  <CheckCircle className="size-5 text-green-600" />
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-start gap-3">
              <div className="bg-orange-100 rounded-lg p-2">
                <Calendar className="size-5 text-orange-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <p className="text-gray-900">スキルアップセミナー</p>
                    <p className="text-gray-600 text-sm">2025年9月10日</p>
                  </div>
                  <Badge className="bg-orange-600">C</Badge>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-gray-700 text-sm">取得単位: 2単位</p>
                  <CheckCircle className="size-5 text-green-600" />
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 rounded-lg p-2">
                <Calendar className="size-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <p className="text-gray-900">オンライン講座</p>
                    <p className="text-gray-600 text-sm">2025年8月5日</p>
                  </div>
                  <Badge className="bg-blue-600">A</Badge>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-gray-700 text-sm">取得単位: 2単位</p>
                  <CheckCircle className="size-5 text-green-600" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
